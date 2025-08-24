export const waitForElement = (
  selector: string,
  { timeout = 5000 } = {},
): Promise<Element | null> => {
  const startTime = performance.now();

  return new Promise((resolve) => {
    function check(): void {
      const element = document.querySelector(selector);

      if (element) {
        resolve(element);
        return;
      }

      if (performance.now() - startTime > timeout) {
        console.warn(`Timeout: Could not find element: ${selector}`);
        resolve(null);
        return;
      }

      requestAnimationFrame(check);
    }

    check();
  });
};
