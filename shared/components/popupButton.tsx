import { type ComponentType, type FC, memo } from "react";
import { Icons } from "./icons.tsx";
import { PopupModal } from "./popupModal.tsx";

export interface PopupButtonProps {
  name: string;
  popupModal: ComponentType;
}

export const PopupButton: FC<PopupButtonProps> = memo(({ name, popupModal: PopupModalContent }) => {
  return (
    <button
      className="popup-button"
      onClick={() =>
        PopupModal({
          title: name,
          content: <PopupModalContent />,
          isLarge: false,
        })
      }
    >
      <Icons.React.editButton size={16} />
    </button>
  );
});
