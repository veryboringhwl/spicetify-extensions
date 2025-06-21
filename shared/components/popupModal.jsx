import React, { memo } from "react";
import ReactDOM from "react-dom";
import Icons from "./icons";
import "../styles/popupModal.css";

let modalContainer = null;
let modalRoot = null;

const closeModal = () => {
  if (modalRoot && modalContainer) {
    modalRoot.unmount();
    modalContainer.remove();
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", handleEscKey);
    document.removeEventListener("mousedown", handleClickOutside);
    modalContainer = null;
    modalRoot = null;
  }
};

const handleEscKey = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

const handleClickOutside = (event) => {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal();
  }
};

const PopupModal = ({ title = "", content, isLarge = true, buttons = false, icon = "" } = {}) => {
  modalContainer = document.getElementById("popup-modal");
  if (!modalContainer) {
    modalContainer = document.createElement("popup-modal");
    modalContainer.id = "popup-modal";
    document.body.appendChild(modalContainer);
  }

  modalRoot = ReactDOM.createRoot(modalContainer);
  document.body.style.overflow = "hidden";

  document.addEventListener("keydown", handleEscKey);
  document.addEventListener("mousedown", handleClickOutside);

  const ModalComponent = memo(() => (
    <div className="modal-overlay">
      <div className="modal">
        <div className={`modal__container${isLarge ? " modal__container--large" : ""}`}>
          <div className="modal__header">
            <div className="modal__titleContainer">
              <div className="modal__icon">{icon}</div>
              <h1 className="modal__title">{title}</h1>
            </div>
            <div className="modal__buttonContainer">
              {buttons}
              <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
                <button className="modal__button modal__button--close" onClick={() => closeModal()}>
                  <Icons.React.close size={18} />
                </button>
              </Spicetify.ReactComponent.TooltipWrapper>
            </div>
          </div>
          <div className="modal__content">
            {React.isValidElement(content) ? content : React.createElement(content)}
          </div>
        </div>
      </div>
    </div>
  ));

  modalRoot.render(<ModalComponent />);
};

PopupModal.hide = closeModal;

export default PopupModal;
