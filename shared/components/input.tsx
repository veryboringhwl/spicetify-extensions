import { type ChangeEvent, type FC, memo } from "react";
import inputStyles from "../styles/input.css" with { type: "css" };

document.adoptedStyleSheets.push(inputStyles);

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const Input: FC<InputProps> = memo(({ value, onChange, placeholder, disabled = false }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input"
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
});

export default Input;
