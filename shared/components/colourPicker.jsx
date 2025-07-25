import { useCallback, useEffect, useRef, useState } from "react";

const ColourPicker = ({ value, onChange }) => {
  const hexToRgb = useCallback((hex) => {
    const hexValue = hex.replace(/^#/, "");
    return {
      r: Number.parseInt(hexValue.substring(0, 2), 16),
      g: Number.parseInt(hexValue.substring(2, 4), 16),
      b: Number.parseInt(hexValue.substring(4, 6), 16),
    };
  }, []);

  const rgbToHex = useCallback((r, g, b) => {
    const toHex = (c) => c.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }, []);

  const rgbToHsv = useCallback((r, g, b) => {
    const nr = r / 255;
    const ng = g / 255;
    const nb = b / 255;
    const max = Math.max(nr, ng, nb);
    const min = Math.min(nr, ng, nb);
    const d = max - min;
    const s = max === 0 ? 0 : d / max;

    let h = 0;
    if (max !== min) {
      switch (max) {
        case nr:
          h = (ng - nb) / d + (ng < nb ? 6 : 0);
          break;
        case ng:
          h = (nb - nr) / d + 2;
          break;
        case nb:
          h = (nr - ng) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      v: Math.round(max * 100),
    };
  }, []);

  const hsvToRgb = useCallback((h, s, v) => {
    const nh = h / 360;
    const ns = s / 100;
    const nv = v / 100;

    const i = Math.floor(nh * 6);
    const f = nh * 6 - i;
    const p = nv * (1 - ns);
    const q = nv * (1 - f * ns);
    const t = nv * (1 - (1 - f) * ns);

    let r;
    let g;
    let b;
    switch (i % 6) {
      case 0:
        r = nv;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = nv;
        b = p;
        break;
      case 2:
        r = p;
        g = nv;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = nv;
        break;
      case 4:
        r = t;
        g = p;
        b = nv;
        break;
      case 5:
        r = nv;
        g = p;
        b = q;
        break;
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  }, []);

  // State management
  const [color, setColor] = useState(() => {
    if (value && /^#[0-9A-F]{6}$/i.test(value)) {
      return { ...hexToRgb(value), a: 1 };
    }
    return { r: 0, g: 0, b: 0, a: 1 };
  });

  const [hexValue, setHexValue] = useState(() => rgbToHex(color.r, color.g, color.b));
  const [hsv, setHsv] = useState(() => rgbToHsv(color.r, color.g, color.b));
  const [isOpen, setIsOpen] = useState(false);

  // Refs
  const colorPickerRef = useRef(null);
  const hueCanvasRef = useRef(null);
  const colorWheelRef = useRef(null);
  const hueSliderRef = useRef(null);
  const colorThumbRef = useRef(null);

  // Effects
  useEffect(() => {
    if (value && /^#[0-9A-F]{6}$/i.test(value)) {
      const newRgb = hexToRgb(value);
      setColor((prev) => ({ ...newRgb, a: prev.a }));
      setHexValue(value);
      setHsv(rgbToHsv(newRgb.r, newRgb.g, newRgb.b));
    }
  }, [value, hexToRgb, rgbToHsv]);

  useEffect(() => {
    if (hueCanvasRef.current && colorWheelRef.current) {
      drawHueSlider();
      drawColorWheel();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      drawHueSlider();
      drawColorWheel();
      updateHueSliderPosition();
    }
  }, [isOpen]);

  useEffect(() => {
    onChange?.(rgbToHex(color.r, color.g, color.b));
  }, [color, onChange, rgbToHex]);

  useEffect(() => {
    const rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
    setColor((prev) => ({ ...rgb, a: prev.a }));
    setHexValue(rgbToHex(rgb.r, rgb.g, rgb.b));
    drawColorWheel();
    updateHueSliderPosition();
  }, [hsv, hsvToRgb, rgbToHex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Drawing functions
  const drawHueSlider = () => {
    const canvas = hueCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

    for (let i = 0; i <= 360; i += 30) {
      gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const drawColorWheel = () => {
    const canvas = colorWheelRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `hsl(${hsv.h}, 100%, 50%)`;
    ctx.fillRect(0, 0, width, height);

    // White gradient (horizontal)
    const gradientWhite = ctx.createLinearGradient(0, 0, width, 0);
    gradientWhite.addColorStop(0, "rgba(255,255,255,1)");
    gradientWhite.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradientWhite;
    ctx.fillRect(0, 0, width, height);

    // Black gradient (vertical)
    const gradientBlack = ctx.createLinearGradient(0, height, 0, 0);
    gradientBlack.addColorStop(0, "rgba(0,0,0,1)");
    gradientBlack.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradientBlack;
    ctx.fillRect(0, 0, width, height);

    // Update thumb position
    if (colorThumbRef.current) {
      colorThumbRef.current.style.left = `${(hsv.s / 100) * width}px`;
      colorThumbRef.current.style.top = `${(1 - hsv.v / 100) * height}px`;
    }
  };

  const updateHueSliderPosition = () => {
    if (hueSliderRef.current && hueCanvasRef.current) {
      hueSliderRef.current.style.left = `${(hsv.h / 360) * hueCanvasRef.current.width}px`;
    }
  };

  // Event handlers
  const handleHueChange = (e) => {
    if (!hueCanvasRef.current) return;

    const rect = hueCanvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const newHue = Math.round((x / rect.width) * 360);

    setHsv((prev) => ({ ...prev, h: newHue }));
  };

  const handleColorSquareChange = (e) => {
    if (!colorWheelRef.current) return;

    const rect = colorWheelRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

    setHsv((prev) => ({
      ...prev,
      s: Math.round((x / rect.width) * 100),
      v: Math.round((1 - y / rect.height) * 100),
    }));
  };

  const handleRgbChange = (channel, value) => {
    if (value === "") return;

    const numValue = Number.parseInt(value, 10);
    if (Number.isNaN(numValue)) return;

    const updatedValue = Math.max(0, Math.min(255, numValue));
    const updatedColor = { ...color, [channel]: updatedValue };

    setColor(updatedColor);
    setHexValue(rgbToHex(updatedColor.r, updatedColor.g, updatedColor.b));
    setHsv(rgbToHsv(updatedColor.r, updatedColor.g, updatedColor.b));
  };

  const handleAlphaChange = (value) => {
    if (value === "") return;

    const numValue = Number.parseFloat(value);
    if (Number.isNaN(numValue)) return;

    setColor((prev) => ({ ...prev, a: Math.max(0, Math.min(1, numValue)) }));
  };

  const handleHexChange = (value) => {
    setHexValue(value);

    if (/^#[0-9A-F]{6}$/i.test(value)) {
      const rgb = hexToRgb(value);
      setColor((prev) => ({ ...rgb, a: prev.a }));
      setHsv(rgbToHsv(rgb.r, rgb.g, rgb.b));
    }
  };

  return (
    <div className="rgba-picker-container" ref={colorPickerRef}>
      <div
        className="rgba-picker-preview"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        }}
      />

      {isOpen && (
        <div className="rgba-picker-menu">
          <div className="rgba-picker-color-section">
            <div className="rgba-picker-color-square">
              <canvas
                className="rgba-picker-color-wheel"
                height="200"
                onMouseDown={handleColorSquareChange}
                onMouseMove={(e) => e.buttons === 1 && handleColorSquareChange(e)}
                ref={colorWheelRef}
                width="200"
              />
              <div className="rgba-picker-color-thumb" ref={colorThumbRef} />
            </div>
            <div className="rgba-picker-hue-slider-container">
              <canvas
                className="rgba-picker-hue-canvas"
                height="16"
                onMouseDown={handleHueChange}
                onMouseMove={(e) => e.buttons === 1 && handleHueChange(e)}
                ref={hueCanvasRef}
                width="200"
              />
              <div className="rgba-picker-hue-slider" ref={hueSliderRef} />
            </div>
          </div>

          <div className="rgba-picker-hex-alpha">
            <div className="rgba-picker-input">
              <label>Hex</label>
              <input
                onChange={(e) => handleHexChange(e.target.value)}
                type="text"
                value={hexValue}
              />
            </div>
            <div className="rgba-picker-input">
              <label>Alpha</label>
              <input
                max="1"
                min="0"
                onChange={(e) => handleAlphaChange(e.target.value)}
                step="0.01"
                type="number"
                value={color.a}
              />
            </div>
          </div>

          <div className="rgba-picker-rgb">
            <div className="rgba-picker-input">
              <label>R</label>
              <input
                max="255"
                min="0"
                onChange={(e) => handleRgbChange("r", e.target.value)}
                type="number"
                value={color.r}
              />
            </div>
            <div className="rgba-picker-input">
              <label>G</label>
              <input
                max="255"
                min="0"
                onChange={(e) => handleRgbChange("g", e.target.value)}
                type="number"
                value={color.g}
              />
            </div>
            <div className="rgba-picker-input">
              <label>B</label>
              <input
                max="255"
                min="0"
                onChange={(e) => handleRgbChange("b", e.target.value)}
                type="number"
                value={color.b}
              />
            </div>
          </div>

          <div className="rgba-picker-alpha-slider">
            <div className="rgba-picker-alpha-gradient" />
            <input
              max="1"
              min="0"
              onChange={(e) => handleAlphaChange(e.target.value)}
              step="0.01"
              type="range"
              value={color.a}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColourPicker;
