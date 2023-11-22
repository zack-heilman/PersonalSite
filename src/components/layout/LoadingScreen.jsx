import { LoadingScreenLogo } from "../utils";

const LoadingScreen = () => {
  return (
      <div className="loading-screen bg-grey-darken">
        <div className="loading-screen-overlay">
          <LoadingScreenLogo />
        </div>
      </div>
  );
};

export default LoadingScreen;
