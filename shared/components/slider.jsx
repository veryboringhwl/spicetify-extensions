import { memo, useCallback, useEffect, useRef } from "react";
import "../styles/slider.css";

const Slider = memo(
  ({ value, min = 0, max, step = 1, defaultValue, onChange, onRelease, disabled = false }) => {
    const sliderRef = useRef(null);
    const isDragging = useRef(false);

    const controlledValue = value !== undefined ? value : defaultValue;
    const progress = max > min ? ((controlledValue - min) / (max - min)) * 100 : 0;

    const handleInteraction = useCallback(
      (e, isTouch = false) => {
        if (!sliderRef.current || disabled) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = isTouch ? e.touches[0].clientX : e.clientX;
        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        let newValue = (newX / rect.width) * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));

        onChange(newValue);
      },
      [min, max, step, onChange, disabled],
    );

    const handleMouseDown = useCallback(
      (e) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e, false);
      },
      [handleInteraction, disabled],
    );

    const handleTouchStart = useCallback(
      (e) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e, true);
      },
      [handleInteraction, disabled],
    );

    const handleMouseUp = useCallback(() => {
      if (isDragging.current) {
        onRelease?.();
      }
      isDragging.current = false;
    }, [onRelease]);

    const handleTouchEnd = handleMouseUp;

    const handleMouseMove = useCallback(
      (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        handleInteraction(e, false);
      },
      [handleInteraction],
    );

    const handleTouchMove = useCallback(
      (e) => {
        if (!isDragging.current) return;
        handleInteraction(e, true);
      },
      [handleInteraction],
    );

    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

    return (
      <div className="slider" disabled={disabled}>
        <div
          className="slider-container"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          ref={sliderRef}
        >
          <div className="slider__track">
            <div className="slider__fill" style={{ width: `${progress}%` }} />
            <div className="slider__thumb" style={{ left: `${progress}%` }} />
          </div>
        </div>
      </div>
    );
  },
);

export default Slider;
