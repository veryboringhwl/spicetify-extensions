import "./popupModal.css";
import React, { memo } from "react";
import ReactDOM from "react-dom";
import Icons from "./icons";

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
  if (event.target.classList.contains("Modal__overlay")) {
    closeModal();
  }
};

const PopupModal = ({ title = "", content, isLarge = true, buttons = null, icon = "" } = {}) => {
  modalContainer = document.getElementById("popup-modal");
  if (!modalContainer) {
    modalContainer = document.createElement("popup-modal");
    modalContainer.id = "popup-modal";
    document.body.appendChild(modalContainer);
  }

  modalRoot = ReactDOM.createRoot(modalContainer);
  document.addEventListener("keydown", handleEscKey);
  document.addEventListener("mousedown", handleClickOutside);

  const ModalComponent = memo(() => (
    <div className="Modal__overlay">
      <div className="Modal">
        <div className={`Modal__container${isLarge ? " Modal__container--large" : ""}`}>
          <div className="Modal__header">
            <div className="Modal__titleContainer">
              <div className="Modal__icon">{icon}</div>
              <h1 className="Modal__title">{title}</h1>
            </div>
            <div className="Modal__buttonContainer">
              {buttons}
              <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
                <button
                  type="button"
                  className="Modal__button Modal__button--close"
                  onClick={() => closeModal()}
                >
                  <Icons.React.close size={18} />
                </button>
              </Spicetify.ReactComponent.TooltipWrapper>
            </div>
          </div>
          <div className="Modal__content">
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
