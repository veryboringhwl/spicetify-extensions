import type { ComponentType, FC, KeyboardEvent, MouseEvent, ReactNode } from "react";
import { isValidElement, memo, useEffect, useRef } from "react";
import { createRoot, type Root } from "react-dom/client";
import styles from "../styles/popupModal.css" with { type: "css" };
import { Icons } from "./icons.tsx";

document.adoptedStyleSheets.push(styles);

export interface PopupModalProps {
  title: string;
  content: ReactNode | ComponentType<any>;
  isLarge?: boolean;
  buttons?: ReactNode;
  icon?: ReactNode;
}

interface ModalComponentProps extends PopupModalProps {
  onClose: () => void;
}

let modalRoot: Root | null = null;
const modalContainerId = "popup-modal-container";

const closeModal = (): void => {
  const container = document.getElementById(modalContainerId);
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  if (container) {
    container.remove();
  }
  document.body.style.overflow = "auto";
};

const ModalComponent: FC<ModalComponentProps> = memo(
  ({ title, content, isLarge, buttons, icon, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown as any);

      return () => {
        document.removeEventListener("keydown", handleKeyDown as any);
      };
    }, [onClose]);

    const handleClose = () => {
      onClose();
    };

    const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === modalRef.current) {
        handleClose();
      }
    };

    const renderContent = (): ReactNode => {
      if (isValidElement(content)) {
        return content;
      }
      if (typeof content === "function") {
        const ContentComponent = content as ComponentType;
        return <ContentComponent />;
      }
      return content;
    };

    return (
      <div className="modal" onClick={handleBackdropClick} ref={modalRef}>
        <div className={`modal__container${isLarge ? " modal__container--large" : ""}`}>
          <div className="modal__header">
            <div className="modal__titleContainer">
              {icon && <div className="modal__icon">{icon}</div>}
              <h1 className="modal__title">{title}</h1>
            </div>
            <div className="modal__buttonContainer">
              {buttons}
              <Spicetify.ReactComponent.TooltipWrapper label="Close" placement="top">
                <button className="modal__button modal__button--close" onClick={handleClose}>
                  <Icons.React.close size={18} />
                </button>
              </Spicetify.ReactComponent.TooltipWrapper>
            </div>
          </div>
          <div className="modal__content">{renderContent()}</div>
        </div>
      </div>
    );
  },
);

export const PopupModal = (props: PopupModalProps): void => {
  if (document.getElementById(modalContainerId)) {
    closeModal();
  }
  const container = document.createElement("div");
  container.id = modalContainerId;
  document.body.appendChild(container);

  modalRoot = createRoot(container);
  modalRoot.render(<ModalComponent {...props} onClose={closeModal} />);
};

PopupModal.hide = closeModal;
