import { type FC, memo } from "react";
import type { TippyButtonProps } from "../types/temp.d.ts";
import { Icons } from "./icons.tsx";

export const TippyButton: FC<TippyButtonProps> = memo(({ tippy }) => {
  return (
    <Spicetify.ReactComponent.TooltipWrapper label={tippy} placement="top" showDelay={0}>
      <div className="info-tippy">
        <Icons.React.questionMark fill="var(--spice-subtext)" size={20} />
      </div>
    </Spicetify.ReactComponent.TooltipWrapper>
  );
});
