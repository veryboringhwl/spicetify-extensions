import { useCallback, useEffect, useMemo, useRef, useState } from "react";

let listenerCount = 0;
let intervalId = null;

const startProgressTracking = () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    const currentState = Spicetify.Platform.PlayerAPI._state;
    Spicetify.Platform.PlayerAPI._events.emit("progress", currentState);
  }, 100);
};

const stopProgressTracking = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const usePlayer = (trackUri, trackDuration) => {
  const [playerState, setPlayerState] = useState(Spicetify.Platform.PlayerAPI._state);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(trackDuration);

  const isSliderDragging = useRef(false);
  const seekPositionRef = useRef(0);

  const updatePlayerData = useCallback(
    (newPlayerState, isProgressUpdate = false) => {
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

    const updateListener = (event) => updatePlayerData(event.data);
    const progressListener = (event) => updatePlayerData(event.data, true);

    Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener);
    Spicetify.Platform.PlayerAPI._events.addListener("progress", progressListener);

    return () => {
      listenerCount--;
      if (listenerCount === 0) {
        stopProgressTracking();
      }
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener);
      Spicetify.Platform.PlayerAPI._events.removeListener("progress", progressListener);
    };
  }, [updatePlayerData]);

  const togglePlay = useCallback(() => {
    const currentPlayingTrack = playerState.item?.uri;
    if (currentPlayingTrack === trackUri) {
      playerState.isPaused
        ? Spicetify.Platform.PlayerAPI.resume()
        : Spicetify.Platform.PlayerAPI.pause();
    } else {
      Spicetify.Platform.PlayerAPI.play(
        {
          uri: trackUri,
        },
        {},
        {},
      );
    }
  }, [playerState, trackUri]);

  const handleSliderChange = useCallback((newPosition) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
    seekPositionRef.current = newPosition;
  }, []);

  const handleSliderRelease = useCallback(() => {
    if (isSliderDragging.current) {
      const isSameTrackInPlayer = playerState.item?.uri === trackUri;

      if (!isSameTrackInPlayer) {
        Spicetify.Platform.PlayerAPI.play(
          {
            uri: trackUri,
          },
          {},
          {},
        );
      } else {
        Spicetify.Platform.PlayerAPI.seekTo(position);
      }
      isSliderDragging.current = false;
    }
  }, [position, trackUri, playerState]);

  const isCurrentlyPlayingThisTrack = useMemo(
    () => !playerState.isPaused && playerState.item?.uri === trackUri,
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

export default usePlayer;
