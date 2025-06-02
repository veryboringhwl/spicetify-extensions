import ReactDOM from "react-dom";
import "./styles.css";

const minimisePath =
  "M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z";
const maximisePath =
  "M3.646 11.648l-2.418 2.417.707.707 2.418-2.418L5.999 14v-4h-4l1.647 1.648zm11.125-9.712l-.707-.707-2.418 2.418L10 2v4h4l-1.647-1.647 2.418-2.417z";

const FullscreenButton = () => {
  const isFullscreen = document.documentElement.classList.contains("fullscreen");

  const toggleFullscreen = () => {
    document.documentElement.classList.toggle("fullscreen");
    renderFullscreenButton();
  };

  const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";
  const pathData = isFullscreen ? maximisePath : minimisePath;

  return (
    <Spicetify.ReactComponent.TooltipWrapper label={label}>
      <button className="lyrics-config-button" onClick={toggleFullscreen}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          style={{ verticalAlign: "middle" }}
        >
          <path d={pathData} />
        </svg>
      </button>
    </Spicetify.ReactComponent.TooltipWrapper>
  );
};

const renderFullscreenButton = () => {
  const container = document.querySelector(".lyrics-config-button-container");
  if (!container) return;

  let buttonWrapper = container.querySelector(".lyrics-tooltip-wrapper.fullscreen");

  if (!buttonWrapper) {
    buttonWrapper = document.createElement("div");
    buttonWrapper.className = "lyrics-tooltip-wrapper fullscreen";
    container.appendChild(buttonWrapper);
  }

  ReactDOM.render(<FullscreenButton />, buttonWrapper);
};

const observer = new MutationObserver(renderFullscreenButton);

observer.observe(document.body, { childList: true, subtree: true });

renderFullscreenButton();
