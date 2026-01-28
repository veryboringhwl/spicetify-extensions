import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

// @ts-expect-error
const require = webpackChunkclient_web.push([[Symbol()], {}, (re) => re]);
const chunks = Object.entries(require.m);

const foundModules = chunks.filter(
  ([_, definition]) =>
    typeof definition === "function" &&
    definition.toString().includes("main-confirmDialog-container"),
);

const component = foundModules.flatMap(([id]) => Object.values(require(id)))[0];
Spicetify.ReactComponent.ConfirmDialog = component;

export interface ConfirmDialogProps {
  titleText: string;
  descriptionText: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  onOutside?: () => void;
  allowHTML?: boolean;
  confirmLabel?: string;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldFocusAfterRender?: boolean;
  width?: number | string;
}

export function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  allowHTML,
  confirmLabel,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
  shouldFocusAfterRender,
  width,
}: ConfirmDialogProps) {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);

  const ConfirmDialogComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      onOpen?.();
    }, []);

    useEffect(() => {
      if (isOpen) {
        return;
      }

      const unmountAndRemove = () => {
        root.unmount();
        container.remove();
      };

      const dialogElement = dialogRef.current;

      if (dialogElement) {
        dialogElement.addEventListener("animationend", unmountAndRemove, { once: true });

        return () => {
          dialogElement.removeEventListener("animationend", unmountAndRemove);
        };
      } else {
        unmountAndRemove();
      }
    }, [isOpen]);

    const wrapAction = (action: (() => void) | undefined) => {
      return () => {
        action?.();
        setIsOpen(false);
      };
    };

    return (
      <Spicetify.ReactComponent.ConfirmDialog
        allowHTML={allowHTML}
        cancelText={cancelText}
        confirmLabel={confirmLabel}
        confirmText={confirmText}
        descriptionText={descriptionText}
        isOpen={isOpen}
        onClose={wrapAction(onClose)}
        onConfirm={wrapAction(onConfirm)}
        onOutside={wrapAction(onOutside)}
        ref={dialogRef}
        shouldCloseOnEsc={shouldCloseOnEsc}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldFocusAfterRender={shouldFocusAfterRender}
        titleText={titleText}
        width={width}
      />
    );
  };

  root.render(<ConfirmDialogComponent />);
}
