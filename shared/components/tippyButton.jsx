import { memo } from "react";
import Icons from "./icons";

const TippyButton = memo(({ tippy }) => {
  return (
    <Spicetify.ReactComponent.TooltipWrapper label={tippy} placement="top" showDelay={0}>
      <div className="themeOptionTippy">
        <Icons.React.questionMark fill="var(--spice-subtext)" size={20} />
      </div>
    </Spicetify.ReactComponent.TooltipWrapper>
  );
});

export default TippyButton;
