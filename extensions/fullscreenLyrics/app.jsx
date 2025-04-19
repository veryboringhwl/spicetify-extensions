import "./styles.scss";

const minimisePath =
  "M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z";

const maximisePath =
  "M3.646 11.648l-2.418 2.417.707.707 2.418-2.418L5.999 14v-4h-4l1.647 1.648zm11.125-9.712l-.707-.707-2.418 2.418L10 2v4h4l-1.647-1.647 2.418-2.417z";

const addButton = () => {
  const container = document.querySelector(".lyrics-config-button-container");
  if (!container) return;

  let button = container.querySelector("button.minimise");

  if (!button) {
    button = document.createElement("button");
    button.classList.add("minimise", "lyrics-config-button");
    button.setAttribute("type", "button");

    const updateButtonState = () => {
      const isFullscreen = document.body.classList.contains("minimised");
      const pathData = isFullscreen ? maximisePath : minimisePath;
      const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";
      button.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: middle;"><path d="${pathData}"/></svg>`;
      button.setAttribute("aria-label", label);
      button.title = label;
    };

    updateButtonState();

    button.addEventListener("click", () => {
      document.body.classList.toggle("minimised");
      updateButtonState();
    });

    container.appendChild(button);
  }
};

const observer = new MutationObserver(addButton);
observer.observe(document.body, { childList: true, subtree: true });
