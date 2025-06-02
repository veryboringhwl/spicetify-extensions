import { memo } from "react";
import "../styles/toggle.css";

const Toggle = memo(({ value, onChange, disabled }) => (
  <button className="toggle" onClick={onChange} disabled={disabled}>
    <span className="toggle__background">
      <span
        className={`toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`}
      />
    </span>
  </button>
));

export default Toggle;
