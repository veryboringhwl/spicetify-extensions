import "./dropdown.scss";
import { memo, useId, useRef } from "react";
import Icons from "./icons";

const Dropdown = memo(({ value, options, onChange, disabled }) => {
  const popoverId = useId();
  const popoverRef = useRef(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;

  const handleSelect = (option) => {
    onChange?.({ target: { value: option.value } });
    popoverRef.current?.hidePopover();
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select...";

  return (
    <div className={`themeOptionDropdown ${disabled ? "disabled" : ""}`}>
      <button
        className="themeOptionDropdownButton"
        popovertarget={popoverId}
        popovertargetaction="toggle"
        disabled={disabled}
        style={{ anchorName: anchorName }}
      >
        <div className="themeOptionDropdownText">{selectedLabel}</div>
        <div className="themeOptionDropdownArrow">
          <Icons.React.dropdown size={12} />
        </div>
      </button>
      <div
        popover="auto"
        id={popoverId}
        ref={popoverRef}
        className="themeOptionDropdownMenu"
        style={{
          top: `calc(anchor(${anchorName} bottom) + 4px)`,
          left: `anchor(${anchorName} left)`,
          width: `anchor-size(${anchorName} width)`,
        }}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`themeOptionDropdownOptions ${value === option.value ? "selected" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Dropdown;
