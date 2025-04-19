import React from "react";
import ReactDOM from "react-dom";

function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  confirmLabel,
  allowHTML,
}) {
  const ConfirmDialog = React.memo(() => {
    const [state, setState] = Spicetify.React.useState(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");

    React.useEffect(() => {
      if (state) onOpen?.();
    }, [state, onOpen]);

    return (
      <Spicetify.ReactComponent.RemoteConfigProvider
        configuration={Spicetify.Platform.RemoteConfiguration}
      >
        <Spicetify.ReactComponent.ConfirmDialog
          titleText={titleText}
          descriptionText={descriptionText}
          cancelText={cancelText}
          confirmText={confirmText}
          isOpen={state}
          onOutside={() => {
            setState(false);
            onOutside?.();
            menu?.remove();
          }}
          onClose={() => {
            setState(false);
            onClose?.();
            menu?.remove();
          }}
          onConfirm={() => {
            setState(false);
            onConfirm?.();
            menu?.remove();
          }}
          confirmLabel={confirmLabel}
          allowHTML={allowHTML}
        />
      </Spicetify.ReactComponent.RemoteConfigProvider>
    );
  });

  ReactDOM.createRoot(document.createElement("div")).render(<ConfirmDialog />);
}

// Example usage:
// ConfirmDialog({
//   titleText: "Debug Menu",
//   descriptionText: "Are you <b>sure</b>?",
//   onOutside: () => {
//     Spicetify.showNotification("Clicked outside");
//   },
//   confirmText: "Ok",
//   allowHTML: true,
// });

export default ConfirmDialog;
