import "./toggle.scss";
import { memo } from "react";

const Toggle = memo(({ value, onChange, disabled }) => (
  <button className="themeOptionToggle" onClick={onChange} disabled={disabled}>
    <span className="toggleBackground">
      <span className={`toggle ${value ? "enabled" : ""} ${disabled ? "disabled" : ""}`} />
    </span>
  </button>
));

export default Toggle;
