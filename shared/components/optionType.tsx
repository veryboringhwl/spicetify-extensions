import { type ComponentType, type FC, memo } from "react";
import { Dropdown } from "./dropdown.tsx";
import { Input } from "./input.tsx";
import { Slider } from "./slider.tsx";
import { Toggle } from "./toggle.tsx";

interface BaseOption {
  name: string;
  desc: string;
  tippy?: string;
  run?: (value: any) => void;
  popupModal?: ComponentType<any>;
  incompatible?: string[];
}

export interface ToggleOption extends BaseOption {
  type: "toggle";
  defaultVal: boolean;
  reveal?: Option[];
}

export interface InputOption extends BaseOption {
  type: "input";
  defaultVal: string | number;
  placeholder?: string;
}

export interface DropdownOptionDef {
  value: string;
  label: string;
}

export interface DropdownOption extends BaseOption {
  type: "dropdown";
  options: DropdownOptionDef[];
  defaultVal: string;
}

export interface RadioButtonOptionDef {
  value: string;
  label: string;
}

export interface RadioButtonOption extends BaseOption {
  type: "radiobutton";
  options: RadioButtonOptionDef[];
  defaultVal: string;
}

export interface SliderOption extends BaseOption {
  type: "slider";
  min?: number;
  max?: number;
  step?: number;
  defaultVal: number;
}

export type Option = ToggleOption | InputOption | DropdownOption | RadioButtonOption | SliderOption;

export interface OptionTypeProps {
  option: Option;
  value: string | boolean | number;
  onChange: (value: string | boolean | number) => void;
  disabled?: boolean;
}

export const OptionType: FC<OptionTypeProps> = memo(({ option, value, onChange, disabled }) => {
  switch (option.type) {
    case "toggle":
      return <Toggle disabled={disabled} onChange={onChange} value={value as boolean} />;
    case "input":
      return (
        <Input
          disabled={disabled}
          onChange={onChange}
          placeholder={option.placeholder}
          value={value as string}
        />
      );
    case "dropdown":
      return (
        <Dropdown
          disabled={disabled}
          onChange={onChange}
          options={option.options || []}
          value={value as string}
        />
      );
    case "slider":
      return (
        <Slider
          disabled={disabled}
          max={option.max}
          min={option.min}
          onChange={onChange}
          step={option.step}
          value={value as number}
        />
      );
    default:
      console.warn(`Unknown option type for option "${(option as Option).name || "N/A"}"`);
      return null;
  }
});
