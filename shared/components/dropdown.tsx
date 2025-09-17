import { type FC, memo, useId, useRef } from "react";
import dropdownStyles from "../styles/dropdown.css" with { type: "css" };
import { Icons } from "./icons.tsx";

document.adoptedStyleSheets.push(dropdownStyles);

export interface DropdownOptionDef {
  value: string;
  label: string;
}

export interface DropdownProps {
  value: string;
  options: DropdownOptionDef[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Dropdown: FC<DropdownProps> = memo(({ value, options, onChange, disabled }) => {
  const popoverId = useId();
  const popoverRef = useRef<HTMLDivElement>(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;

  const handleSelect = (option: DropdownOptionDef) => {
    onChange?.(option.value);
    popoverRef.current?.hidePopover();
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select...";

  return (
    // @ts-expect-error
    <div className="dropdown" disabled={disabled}>
      <button
        className="dropdown__button"
        popoverTarget={popoverId}
        popoverTargetAction="toggle"
        // @ts-expect-error
        style={{ anchorName: anchorName }}
      >
        <div className="dropdown__text">{selectedLabel}</div>
        <div className="dropdown__arrow">
          <Icons.React.dropdown size={12} />
        </div>
      </button>
      <div
        className="dropdown__menu"
        id={popoverId}
        popover="auto"
        ref={popoverRef}
        style={{
          top: `calc(anchor(${anchorName} bottom) + 4px)`,
          left: `anchor(${anchorName} left)`,
          width: `anchor-size(${anchorName} width)`,
        }}
      >
        {options.map((option) => (
          <div
            className={`dropdown__option${value === option.value ? " dropdown__option--selected" : ""}`}
            key={option.value}
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => e.key === "Enter" && handleSelect(option)}
            role="option"
            tabIndex={0}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
});
