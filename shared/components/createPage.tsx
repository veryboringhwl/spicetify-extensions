import { type ReactNode, useEffect, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { waitForElement } from "../utils/waitForElement.ts";

type CreatePageProps = {
  path: string;
  element: ReactNode;
};

type RouteInfo = {
  path: string;
  element: ReactNode;
};

let reactRoot: Root;
let rootDiv: HTMLDivElement;
const routes: RouteInfo[] = [];

let initPromise: Promise<void> | null = null;

const AppRouter = () => {
  const [location, setLocation] = useState(Spicetify.Platform.History.location);

  useEffect(() => {
    const unlisten = Spicetify.Platform.History.listen(() =>
      setLocation(Spicetify.Platform.History.location),
    );
    return () => (unlisten as () => void)();
  }, []);

  useEffect(() => {
    const rootDiv = document.querySelector<HTMLDivElement>(".custom-pages");
    const mainEl = document.querySelector<HTMLElement>("main");
    const mainContainer = document.querySelector<HTMLDivElement>(
      ".main-view-container__scroll-node-child",
    );
    if (!(mainEl && mainContainer && rootDiv)) {
      return;
    }

    const hasPagesActive = routes.some((route) => `/${route.path}` === location.pathname);

    if (hasPagesActive) {
      mainEl.style.display = "none";
      mainContainer.style.overflow = "hidden";
      rootDiv.style.height = "100%";
      rootDiv.style.width = "100%";
      rootDiv.style.overflow = "hidden";
    } else {
      mainEl.style.display = "";
      mainContainer.style.overflow = "";
      rootDiv.style.height = "";
      rootDiv.style.width = "";
      rootDiv.style.overflow = "";
    }
  }, [location]);

  return (
    <Spicetify.ReactComponent.Router location={location} navigator={Spicetify.Platform.History}>
      <Spicetify.ReactComponent.Routes>
        {routes.map((route, index) => (
          <Spicetify.ReactComponent.Route
            element={route.element}
            key={`${route.path}-${index}`}
            path={`/${route.path}`}
          />
        ))}
      </Spicetify.ReactComponent.Routes>
    </Spicetify.ReactComponent.Router>
  );
};

const initRoot = async () => {
  const main = await waitForElement(".main-view-container__scroll-node-child");
  if (!main) throw new Error("main-view-container__scroll-node-child not found");
  rootDiv = document.createElement("div");
  rootDiv.className = "custom-pages";
  main.appendChild(rootDiv);
  reactRoot = createRoot(rootDiv);
};

export const createPage = async ({ path, element }: CreatePageProps) => {
  if (!initPromise) {
    initPromise = (async () => {
      await initRoot();
    })();
  }

  await initPromise;

  const existingRouteIndex = routes.findIndex((route) => route.path === path);
  if (existingRouteIndex >= 0) {
    routes[existingRouteIndex] = { path, element };
  } else {
    routes.push({ path, element });
  }

  reactRoot.render(<AppRouter />);
};
