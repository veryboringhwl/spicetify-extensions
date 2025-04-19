const LoadingIndicator = () => (
  <div className="loading-indicator-container">
    <svg viewBox="0 0 120 40" className="loading-indicator">
      <circle stroke="none" cx="20" cy="20" r="8" className="loading-indicator-circle" />
      <circle stroke="none" cx="60" cy="20" r="8" className="loading-indicator-circle" />
      <circle stroke="none" cx="100" cy="20" r="8" className="loading-indicator-circle" />
    </svg>
  </div>
);

export default LoadingIndicator;
