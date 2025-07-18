import { memo, useId, useRef } from "react";
import Icons from "./icons";
import "../styles/dropdown.css";

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
    <div className="dropdown">
      <button
        className="dropdown__button"
        disabled={disabled}
        popovertarget={popoverId}
        popovertargetaction="toggle"
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
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Dropdown;
