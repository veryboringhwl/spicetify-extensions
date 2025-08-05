import { type ComponentType, type FC, memo } from "react";
import optionRowStyles from "../styles/optionRow.css" with { type: "css" };
import { OptionType } from "./optionType.tsx";
import { PopupButton } from "./popupButton.tsx";
import { TippyButton } from "./tippyButton.tsx";

document.adoptedStyleSheets.push(optionRowStyles);

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

export interface OptionRowProps {
  name: string;
  desc: string;
  tippy?: string;
  popupModal?: ComponentType;
  option?: Option;
  value: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
  disabled?: boolean;
}

export const OptionRow: FC<OptionRowProps> = memo(
  ({ name, desc, tippy, popupModal, option, value, onChange, disabled }) => (
    <div className="option__row">
      <div className="option__content">
        <div className="option__desc">{desc}</div>
        {tippy && <TippyButton tippy={tippy} />}
      </div>
      <div className="option__control">
        {popupModal && <PopupButton name={name} popupModal={popupModal} />}
        {option && (
          <OptionType
            disabled={disabled}
            onChange={onChange || (() => {})}
            option={option}
            value={value}
          />
        )}
      </div>
    </div>
  ),
);
