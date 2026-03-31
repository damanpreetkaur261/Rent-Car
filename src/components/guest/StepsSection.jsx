import StepCard from "./StepCard";
import stepsData from "../data/guest";
import "./steps.css";

const StepsSection = () => {
  return (
    <div className="steps-container">
      <h2 className="steps-title">How to book a car on Zoomcar</h2>

      <div className="steps-grid">
        {stepsData.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default StepsSection;