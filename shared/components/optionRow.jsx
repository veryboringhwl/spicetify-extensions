import { memo } from "react";
import InfoButton from "./infoButton";
import TippyButton from "./tippyButton";
import "../styles/optionRow.css";

const OptionRow = memo(({ name, desc, tippy, children, popupModal }) => (
  <div className="themeOptionRow" data-name={`theme:${name}`}>
    <div className="themeOptionContent">
      <div className="themeOptionDesc">{desc}</div>
    </div>
    <div className="themeOptionControl">
      {tippy && <TippyButton tippy={tippy} />}
      <InfoButton name={name} popupModal={popupModal} />

      {children}
    </div>
  </div>
));

export default OptionRow;
