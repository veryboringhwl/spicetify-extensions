import { useCallback, useEffect, useRef, useState } from "react";

interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
}

interface RGBColor {
  r: number;
  g: number;
  b: number;
}

interface HSVColor {
  h: number;
  s: number;
  v: number;
}

const ColourPicker = ({ value = "#000000", onChange }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(value);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Color conversion utilities
  const hexToRgb = useCallback((hex: string): RGBColor => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : {
          r: 0,
          g: 0,
          b: 0,
        };
  }, []);

  const rgbToHex = useCallback((r: number, g: number, b: number): string => {
    const toHex = (n: number) => Math.round(n).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }, []);

  const rgbToHsv = useCallback((r: number, g: number, b: number): HSVColor => {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const diff = max - min;

    let h = 0;
    const s = max === 0 ? 0 : diff / max;
    const v = max;

    if (diff !== 0) {
      switch (max) {
        case rNorm:
          h = ((gNorm - bNorm) / diff + (gNorm < bNorm ? 6 : 0)) / 6;
          break;
        case gNorm:
          h = ((bNorm - rNorm) / diff + 2) / 6;
          break;
        case bNorm:
          h = ((rNorm - gNorm) / diff + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      v: Math.round(v * 100),
    };
  }, []);

  const hsvToRgb = useCallback((h: number, s: number, v: number): RGBColor => {
    const hNorm = h / 360;
    const sNorm = s / 100;
    const vNorm = v / 100;

    const c = vNorm * sNorm;
    const x = c * (1 - Math.abs(((hNorm * 6) % 2) - 1));
    const m = vNorm - c;

    let r = 0;
    let g = 0;
    let b = 0;

    const hueSegment = Math.floor(hNorm * 6);
    switch (hueSegment) {
      case 0:
        [r, g, b] = [c, x, 0];
        break;
      case 1:
        [r, g, b] = [x, c, 0];
        break;
      case 2:
        [r, g, b] = [0, c, x];
        break;
      case 3:
        [r, g, b] = [0, x, c];
        break;
      case 4:
        [r, g, b] = [x, 0, c];
        break;
      case 5:
        [r, g, b] = [c, 0, x];
        break;
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  }, []);

  // Handle color changes
  const handleColorChange = useCallback(
    (newColor: string) => {
      setCurrentColor(newColor);
      onChange?.(newColor);
    },
    [onChange],
  );

  // Handle hex input change
  const handleHexChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const hex = event.target.value;
      if (/^#[0-9A-F]{6}$/i.test(hex)) {
        handleColorChange(hex);
      }
    },
    [handleColorChange],
  );

  // Handle RGB input changes
  const handleRgbChange = useCallback(
    (channel: keyof RGBColor, value: string) => {
      const numValue = Number.parseInt(value, 10);
      if (Number.isNaN(numValue)) return;

      const rgb = hexToRgb(currentColor);
      rgb[channel] = Math.max(0, Math.min(255, numValue));

      const newHex = rgbToHex(rgb.r, rgb.g, rgb.b);
      handleColorChange(newHex);
    },
    [currentColor, hexToRgb, rgbToHex, handleColorChange],
  );

  // Handle HSV input changes
  const handleHsvChange = useCallback(
    (channel: keyof HSVColor, value: string) => {
      const numValue = Number.parseInt(value, 10);
      if (Number.isNaN(numValue)) return;

      const rgb = hexToRgb(currentColor);
      const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);

      const maxValues = {
        h: 360,
        s: 100,
        v: 100,
      };
      hsv[channel] = Math.max(0, Math.min(maxValues[channel], numValue));

      const newRgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
      const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
      handleColorChange(newHex);
    },
    [currentColor, hexToRgb, rgbToHsv, hsvToRgb, rgbToHex, handleColorChange],
  );

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Update current color when value prop changes
  useEffect(() => {
    if (value && /^#[0-9A-F]{6}$/i.test(value)) {
      setCurrentColor(value);
    }
  }, [value]);

  const rgb = hexToRgb(currentColor);
  const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);

  return (
    <div className="colour-picker-container" ref={pickerRef}>
      <div
        className="colour-picker-preview"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
        role="button"
        style={{
          backgroundColor: currentColor,
        }}
        tabIndex={0}
      />

      {isOpen && (
        <div className="colour-picker-menu">
          <div className="colour-picker-section">
            <label htmlFor="hex-input">Hex</label>
            <input
              id="hex-input"
              onChange={handleHexChange}
              placeholder="#000000"
              type="text"
              value={currentColor}
            />
          </div>

          <div className="colour-picker-section">
            <h4>RGB</h4>
            <div className="colour-picker-rgb-inputs">
              <div className="colour-picker-input">
                <label htmlFor="r-input">R</label>
                <input
                  id="r-input"
                  max="255"
                  min="0"
                  onChange={(e) => handleRgbChange("r", e.target.value)}
                  type="number"
                  value={rgb.r}
                />
              </div>
              <div className="colour-picker-input">
                <label htmlFor="g-input">G</label>
                <input
                  id="g-input"
                  max="255"
                  min="0"
                  onChange={(e) => handleRgbChange("g", e.target.value)}
                  type="number"
                  value={rgb.g}
                />
              </div>
              <div className="colour-picker-input">
                <label htmlFor="b-input">B</label>
                <input
                  id="b-input"
                  max="255"
                  min="0"
                  onChange={(e) => handleRgbChange("b", e.target.value)}
                  type="number"
                  value={rgb.b}
                />
              </div>
            </div>
          </div>

          <div className="colour-picker-section">
            <h4>HSV</h4>
            <div className="colour-picker-hsv-inputs">
              <div className="colour-picker-input">
                <label htmlFor="h-input">H</label>
                <input
                  id="h-input"
                  max="360"
                  min="0"
                  onChange={(e) => handleHsvChange("h", e.target.value)}
                  type="number"
                  value={hsv.h}
                />
              </div>
              <div className="colour-picker-input">
                <label htmlFor="s-input">S</label>
                <input
                  id="s-input"
                  max="100"
                  min="0"
                  onChange={(e) => handleHsvChange("s", e.target.value)}
                  type="number"
                  value={hsv.s}
                />
              </div>
              <div className="colour-picker-input">
                <label htmlFor="v-input">V</label>
                <input
                  id="v-input"
                  max="100"
                  min="0"
                  onChange={(e) => handleHsvChange("v", e.target.value)}
                  type="number"
                  value={hsv.v}
                />
              </div>
            </div>
          </div>

          <div className="colour-picker-section">
            <label htmlFor="color-input">Color Input</label>
            <input
              id="color-input"
              onChange={(e) => handleColorChange(e.target.value)}
              type="color"
              value={currentColor}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColourPicker;
