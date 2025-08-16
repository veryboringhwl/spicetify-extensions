import {
  type FC,
  memo,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
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
      (e: MouseEvent | TouchEvent) => {
        if (!sliderRef.current || disabled) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        let newValue = (newX / rect.width) * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));
        onChange(newValue);
      },
      [min, max, step, onChange, disabled],
    );

    const handleMouseDown = useCallback(
      (e: ReactMouseEvent) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e.nativeEvent);
      },
      [handleInteraction, disabled],
    );

    const handleTouchStart = useCallback(
      (e: ReactTouchEvent) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e.nativeEvent);
      },
      [handleInteraction, disabled],
    );

    const handleMouseUp = useCallback(() => {
      if (isDragging.current) {
        onRelease?.();
      }
      isDragging.current = false;
    }, [onRelease]);

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        handleInteraction(e);
      },
      [handleInteraction],
    );

    const handleTouchMove = useCallback(
      (e: TouchEvent) => {
        if (!isDragging.current) return;
        handleInteraction(e);
      },
      [handleInteraction],
    );

    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleMouseUp);
      };
    }, [handleMouseMove, handleMouseUp, handleTouchMove]);

    return (
      // @ts-ignore
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
