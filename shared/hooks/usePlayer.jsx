import { useCallback, useEffect, useRef, useState } from "react";

const usePlayer = (trackUri, trackDuration) => {
  const [playerState, setPlayerState] = useState(Spicetify.Platform.PlayerAPI.getState());
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(trackDuration);
  const isSliderDragging = useRef(false);

  useEffect(() => {
    const updateListener = (event) => {
      const newPlayerState = event.data;
      setPlayerState(newPlayerState);
      if (newPlayerState.item?.uri === trackUri) {
        if (!isSliderDragging.current) setPosition(newPlayerState.positionAsOfTimestamp);
        setDuration(newPlayerState.duration);
      } else if (newPlayerState.item?.uri !== trackUri) {
        setPosition(0);
        setDuration(trackDuration);
      }
    };

    Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener);
    return () => {
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener);
    };
  }, [trackUri, trackDuration]);

  useEffect(() => {
    const isPlayingThisTrack = playerState.item?.uri === trackUri;
    const isPlayingAndNotPaused = isPlayingThisTrack && !playerState.isPaused;

    if (!isPlayingAndNotPaused) {
      if (!isPlayingThisTrack) {
        setPosition(0);
        setDuration(trackDuration);
      }
      return;
    }
    const interval = setInterval(() => {
      if (!isSliderDragging.current) {
        const newPosition =
          playerState.positionAsOfTimestamp + (Date.now() - playerState.timestamp);
        setPosition(newPosition < playerState.duration ? newPosition : playerState.duration);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playerState, trackUri, trackDuration]);

  const togglePlay = useCallback(() => {
    const currentPlayingTrack = playerState.item?.uri;
    if (currentPlayingTrack === trackUri) {
      playerState.isPaused
        ? Spicetify.Platform.PlayerAPI.resume()
        : Spicetify.Platform.PlayerAPI.pause();
    } else {
      Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {}, {});
    }
  }, [playerState, trackUri]);

  const handleSliderChange = useCallback((newPosition) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
  }, []);

  const handleSliderRelease = useCallback(() => {
    if (isSliderDragging.current) {
      const isSameTrackInPlayer = playerState.item?.uri === trackUri;

      if (!isSameTrackInPlayer) {
        Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {}, {});
        setTimeout(() => {
          Spicetify.Platform.PlayerAPI.seekTo(position);
        }, 500);
      } else {
        Spicetify.Platform.PlayerAPI.seekTo(position);
      }
      isSliderDragging.current = false;
    }
  }, [position, trackUri, playerState]);

  const isPlaying = !playerState.isPaused;
  const isCurrentlyPlayingThisTrack = isPlaying && playerState.item?.uri === trackUri;

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
