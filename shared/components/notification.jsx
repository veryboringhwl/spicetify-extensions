import React from "react";
import Icons from "./icons";

const Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3000,
  backgroundColour = "#fff",
  colour = "#000",
  isWarning = false,
} = {}) => {
  const content = isWarning ? (
    <>
      <Icons.React.warning size={24} />
      <span>{message}</span>
    </>
  ) : (
    <span>{message}</span>
  );

  const BackgroundColour = isWarning ? "#ff9800" : backgroundColour;
  const Colour = isWarning ? "#fff" : colour;

  try {
    Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
      keyPrefix,
      autoHideDuration,
      children: (
        <div
          className="custom-notification"
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            color: Colour,
            backgroundColor: BackgroundColour,
            padding: "14px 16px",
            borderRadius: "4px",
            fontSize: "0.875rem",
          }}
        >
          {content}
        </div>
      ),
    });
  } catch (error) {
    Console.Error("Error displaying notification:", error);
  }
};

// Example usage:
// Notification({
//   autoHideDuration: 5000,
//   backgroundColor: "#ff9800",
//   message: (
//     <>
//       <svg
//         width="20"
//         height=""
//         viewBox="0 0 96 96"
//         fill="currentColor"
//         dangerouslySetInnerHTML={{ __html: Icons.warning }}
//       />
//       <span>
//         Theme only supports Spotify versions greater than 1.2.50.000
//       </span>
//     </>
//   ),
// });

export default Notification;
