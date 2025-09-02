import { useCallback, useEffect, useMemo, useRef, useState } from "react";

let listenerCount = 0;
let intervalId: number | null = null;

const startProgressTracking = (): void => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    const currentState = Spicetify.Platform.PlayerAPI._state;
    Spicetify.Platform.PlayerAPI._events.emit("progress", currentState);
  }, 100);
};

const stopProgressTracking = (): void => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

interface PlayerStateItem {
  uri: string;
}

interface PlayerState {
  item?: PlayerStateItem;
  isPaused: boolean;
  positionAsOfTimestamp: number;
  timestamp: number;
  duration: number;
}

interface UsePlayerReturn {
  position: number;
  duration: number;
  isCurrentlyPlayingThisTrack: boolean;
  togglePlay: () => void;
  handleSliderChange: (newPosition: number) => void;
  handleSliderRelease: () => void;
}

export const usePlayer = (trackUri: string, trackDuration: number): UsePlayerReturn => {
  const [playerState, setPlayerState] = useState<PlayerState>(Spicetify.Platform.PlayerAPI._state);
  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<number>(trackDuration);

  const isSliderDragging = useRef<boolean>(false);
  const seekPositionRef = useRef<number>(0);

  const updatePlayerData = useCallback(
    (newPlayerState: PlayerState, isProgressUpdate = false): void => {
      setPlayerState(newPlayerState);

      const isPlayingThisTrack = newPlayerState.item?.uri === trackUri;

      if (isPlayingThisTrack) {
        if (
          !isProgressUpdate &&
          seekPositionRef.current !== 0 &&
          newPlayerState.positionAsOfTimestamp < 500
        ) {
          Spicetify.Platform.PlayerAPI.seekTo(seekPositionRef.current);
          seekPositionRef.current = 0;
        }

        if (!isSliderDragging.current) {
          const calculatedPosition =
            isProgressUpdate && !newPlayerState.isPaused
              ? newPlayerState.positionAsOfTimestamp + (Date.now() - newPlayerState.timestamp)
              : newPlayerState.positionAsOfTimestamp;

          setPosition(Math.min(calculatedPosition, newPlayerState.duration));
        }

        setDuration(newPlayerState.duration);
      } else {
        setPosition(0);
        setDuration(trackDuration);
      }
    },
    [trackUri, trackDuration],
  );

  useEffect(() => {
    if (listenerCount === 0) {
      startProgressTracking();
    }
    listenerCount++;

    const initialPlayerState = Spicetify.Platform.PlayerAPI._state;
    updatePlayerData(initialPlayerState);

    const updateListener = (event: { data: PlayerState }): void => updatePlayerData(event.data);
    const progressListener = (event: { data: PlayerState }): void =>
      updatePlayerData(event.data, true);

    Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener, {});
    Spicetify.Platform.PlayerAPI._events.addListener("progress", progressListener, {});

    return (): void => {
      listenerCount--;
      if (listenerCount === 0) {
        stopProgressTracking();
      }
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener, {});
      Spicetify.Platform.PlayerAPI._events.removeListener("progress", progressListener, {});
    };
  }, [updatePlayerData]);

  const togglePlay = useCallback((): void => {
    const currentPlayingTrack = playerState.item?.uri;
    if (currentPlayingTrack === trackUri) {
      playerState.isPaused
        ? Spicetify.Platform.PlayerAPI.resume({})
        : Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play(
        {
          uri: trackUri,
        },
        {},
      );
    }
  }, [playerState, trackUri]);

  const handleSliderChange = useCallback((newPosition: number): void => {
    isSliderDragging.current = true;
    setPosition(newPosition);
    seekPositionRef.current = newPosition;
  }, []);

  const handleSliderRelease = useCallback((): void => {
    if (isSliderDragging.current) {
      const isSameTrackInPlayer = playerState.item?.uri === trackUri;

      if (!isSameTrackInPlayer) {
        Spicetify.Platform.PlayerAPI.play(
          {
            uri: trackUri,
          },
          {},
        );
      } else {
        Spicetify.Platform.PlayerAPI.seekTo(position);
      }
      isSliderDragging.current = false;
    }
  }, [position, trackUri, playerState]);

  const isCurrentlyPlayingThisTrack = useMemo(
    (): boolean => !playerState.isPaused && playerState.item?.uri === trackUri,
    [playerState, trackUri],
  );

  return {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease,
  };
};
