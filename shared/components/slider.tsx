import { type FC, memo, type PointerEvent as ReactPointerEvent, useCallback, useRef } from "react";
import sliderStyles from "../styles/slider.css" with { type: "css" };

document.adoptedStyleSheets.push(sliderStyles);

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange: (value: number) => void;
  onRelease?: () => void;
  disabled?: boolean;
}

export const Slider: FC<SliderProps> = memo(
  ({ value, min = 0, max = 100, step = 1, defaultValue, onChange, onRelease, disabled }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const controlledValue = value !== undefined ? value : defaultValue;
    const progress =
      max > min && controlledValue !== undefined
        ? ((controlledValue - min) / (max - min)) * 100
        : 0;

    const handleInteraction = useCallback(
      (e: PointerEvent) => {
        if (!sliderRef.current || disabled) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = e.clientX;

        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));

        let newValue = (newX / rect.width) * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));

        onChange(newValue);
      },
      [min, max, step, onChange, disabled],
    );

    const handlePointerDown = useCallback(
      (e: ReactPointerEvent) => {
        if (disabled || !sliderRef.current) return;

        isDragging.current = true;
        sliderRef.current.setPointerCapture(e.pointerId);

        handleInteraction(e.nativeEvent as PointerEvent);
      },
      [handleInteraction, disabled],
    );

    const handlePointerMove = useCallback(
      (e: ReactPointerEvent) => {
        if (!isDragging.current) return;
        handleInteraction(e.nativeEvent as PointerEvent);
      },
      [handleInteraction],
    );

    const handlePointerRelease = useCallback(
      (e: ReactPointerEvent) => {
        if (!isDragging.current || !sliderRef.current) return;

        isDragging.current = false;
        sliderRef.current.releasePointerCapture(e.pointerId);

        onRelease?.();
      },
      [onRelease],
    );

    return (
      // @ts-expect-error
      <div className="slider" disabled={disabled}>
        <div
          className="slider-container"
          onPointerCancel={handlePointerRelease}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerRelease}
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
