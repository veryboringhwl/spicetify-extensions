interface waitForElementOptions {
  timeout?: number;
}

export const waitForElement = async <T extends Element>(
  selector: string,
  { timeout = 3000 }: waitForElementOptions = {},
): Promise<T | null> => {
  const startTime = performance.now();

  return new Promise((resolve) => {
    const check = (): void => {
      const element = document.querySelector<T>(selector);

      if (element) {
        resolve(element);
        return;
      }

      if (performance.now() - startTime > timeout) {
        resolve(null);
        console.warn(`Timeout: Could not find element with selector: ${selector}`);
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
};
