import type { ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { waitForElement } from "../utils/waitForElement.ts";

type CreatePageProps = {
  path: string;
  element: ReactNode;
};

interface HistoryLocation {
  pathname: string;
}

interface HistoryState {
  location: HistoryLocation;
  pathname?: string;
}

export const createPage = ({ path, element }: CreatePageProps) => {
  const urlPath = `/${path}`;
  let reactRoot: Root | null = null;

  const PageWrapper = () => {
    return (
      <Spicetify.ReactComponent.Router
        location={Spicetify.Platform.History.location}
        navigator={Spicetify.Platform.History}
      >
        <Spicetify.ReactComponent.Routes>
          <Spicetify.ReactComponent.Route element={element} path={urlPath} />
        </Spicetify.ReactComponent.Routes>
      </Spicetify.ReactComponent.Router>
    );
  };

  const mount = async () => {
    if (reactRoot) return;

    const mainContainer = await waitForElement("main");
    if (!mainContainer) return;

    reactRoot = createRoot(mainContainer);
    reactRoot.render(<PageWrapper />);
  };

  const unmount = () => {
    if (!reactRoot) return;

    reactRoot.unmount();
    reactRoot = null;
  };

  const historyListener = (history: HistoryState) => {
    const currentPath = history.pathname || history.location?.pathname;

    if (currentPath === urlPath) {
      mount();
    } else {
      unmount();
    }
  };

  historyListener(Spicetify.Platform.History);
  Spicetify.Platform.History.listen(historyListener);
};
