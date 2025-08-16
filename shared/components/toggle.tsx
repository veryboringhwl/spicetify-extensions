import { type FC, memo } from "react";
import toggleStyles from "../styles/toggle.css" with { type: "css" };

document.adoptedStyleSheets.push(toggleStyles);

export interface ToggleProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
}

export const Toggle: FC<ToggleProps> = memo(({ value, onChange, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  return (
    <button className="toggle" disabled={disabled} onClick={handleClick} role="switch">
      <span className="toggle__background">
        <span
          className={`toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`}
        />
      </span>
    </button>
  );
});
