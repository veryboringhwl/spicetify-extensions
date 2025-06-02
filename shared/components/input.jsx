import { memo } from "react";
import "../styles/input.css";

const Input = memo(({ value, onChange, placeholder, disabled }) => (
  <input
    className="input"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
  />
));

export default Input;
