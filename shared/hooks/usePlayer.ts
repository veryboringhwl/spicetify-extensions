import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const PlayerAPI = Spicetify.Platform.PlayerAPI;

const playerStore = {
  subscribe: (callback: () => void) => {
    const listener = () => callback();
    PlayerAPI._events.addListener("update", listener, {});
    return () => {
      PlayerAPI._events.removeListener("update", listener, {});
    };
  },
  getSnapshot: () => {
    return PlayerAPI._state;
  },
};
interface UsePlayerReturn {
  position: number;
  duration: number;
  isPlaying: boolean;
  isActiveTrack: boolean;
  togglePlay: () => void;
  handleSliderChange: (newPosition: number) => void;
  handleSliderRelease: () => void;
}

export const usePlayer = (trackUri: string, trackDuration: number): UsePlayerReturn => {
  const playerState = useSyncExternalStore(playerStore.subscribe, playerStore.getSnapshot);

  const isActiveTrack = playerState.item?.uri === trackUri;
  const isPaused = playerState.isPaused;
  const isPlaying = isActiveTrack && !isPaused;

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(trackDuration);

  const isSliderDragging = useRef(false);
  const seekPositionRef = useRef(0);

  useEffect(() => {
    if (!isActiveTrack) {
      setPosition(0);
      setDuration(trackDuration);
      return;
    }

    setDuration(playerState.duration);

    if (isSliderDragging.current) return;

    if (isPaused) {
      setPosition(playerState.positionAsOfTimestamp);
      return;
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      const statedPos = PlayerAPI._state.positionAsOfTimestamp;
      const statedTime = PlayerAPI._state.timestamp;
      const currentPos = now - statedTime + statedPos;

      setPosition(Math.min(currentPos, playerState.duration));
    }, 100);

    return () => clearInterval(intervalId);
  }, [
    isActiveTrack,
    isPaused,
    playerState.duration,
    playerState.positionAsOfTimestamp,
    trackDuration,
  ]);

  const togglePlay = useCallback(() => {
    if (isActiveTrack) {
      isPaused ? PlayerAPI.resume({}) : PlayerAPI.pause({});
    } else {
      PlayerAPI.play({ uri: trackUri }, {});
    }
  }, [isActiveTrack, isPaused, trackUri]);

  const handleSliderChange = useCallback((newPosition: number) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
    seekPositionRef.current = newPosition;
  }, []);

  const handleSliderRelease = useCallback(() => {
    isSliderDragging.current = false;
    if (isActiveTrack) {
      PlayerAPI.seekTo(seekPositionRef.current);
    } else {
      PlayerAPI.play({ uri: trackUri }, {});
    }
  }, [isActiveTrack, trackUri]);

  return {
    position,
    duration,
    isPlaying,
    isActiveTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease,
  };
};
