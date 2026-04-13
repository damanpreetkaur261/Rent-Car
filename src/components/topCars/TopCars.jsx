import "./TopCars.css";
import TopData from "./TopData";

const TopCars = () => {
  return (
    <>
    <div className="ground">
      <div className="topcars">
        <h2>Top Cars in Bangalore</h2>
      </div>
      <div className="display">
      <button><img src="src\assets\left-arrow-white.svg" alt="left Arrow" height="5px" width="5px"/></button>
          <TopData />
        <button><img src="src\assets\right-arrow-white.svg" alt="right arrow" /></button>
        </div>
      </div>
    </>
  );
};

export default TopCars;