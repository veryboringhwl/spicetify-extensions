const LoadingIndicator = () => (
  <div className="loading-indicator-container">
    <svg className="loading-indicator" viewBox="0 0 120 40">
      <circle className="loading-indicator-circle" cx="20" cy="20" r="8" stroke="none" />
      <circle className="loading-indicator-circle" cx="60" cy="20" r="8" stroke="none" />
      <circle className="loading-indicator-circle" cx="100" cy="20" r="8" stroke="none" />
    </svg>
  </div>
);

export default LoadingIndicator;
