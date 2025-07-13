import { memo } from "react";
import "../styles/toggle.css";

const Toggle = memo(({ value, onChange, disabled }) => (
  <button className="toggle" disabled={disabled} onClick={onChange}>
    <span className="toggle__background">
      <span className={`toggle__slider${value ? " toggle__slider--enabled" : ""}`} />
    </span>
  </button>
));

export default Toggle;
