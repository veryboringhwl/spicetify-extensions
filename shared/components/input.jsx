import { memo } from "react";
import "../styles/input.css";

const Input = memo(({ value, onChange, placeholder, disabled }) => (
  <input
    className="input"
    disabled={disabled}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
));

export default Input;
