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
    <div className={`dropdown${disabled ? " dropdown--disabled" : ""}`}>
      <button
        className="dropdown__button"
        popovertarget={popoverId}
        popovertargetaction="toggle"
        disabled={disabled}
        style={{ anchorName: anchorName }}
      >
        <div className="dropdown__text">{selectedLabel}</div>
        <div className="dropdown__arrow">
          <Icons.React.dropdown size={12} />
        </div>
      </button>
      <div
        popover="auto"
        id={popoverId}
        ref={popoverRef}
        className="dropdown__menu"
        style={{
          top: `calc(anchor(${anchorName} bottom) + 4px)`,
          left: `anchor(${anchorName} left)`,
          width: `anchor-size(${anchorName} width)`,
        }}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`dropdown__option${value === option.value ? " dropdown__option--selected" : ""}`}
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
