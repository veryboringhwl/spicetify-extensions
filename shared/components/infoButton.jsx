import { memo } from "react";
import Icons from "./icons";
import PopupModal from "./popupModal";

const InfoButton = memo(({ name, popupModal }) => {
  if (!popupModal) return null;

  return (
    <button
      aria-label="Open popup"
      className="themeOptionPopupButton"
      onClick={() =>
        PopupModal({
          title: name,
          content: popupModal,
          isLarge: false,
        })
      }
    >
      <Icons.React.editButton size={16} />
    </button>
  );
});

export default InfoButton;
