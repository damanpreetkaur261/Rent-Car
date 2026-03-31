const StepCard = ({ image, title }) => {
  return (
    <div className="step-card">
      <img src={image} alt={title} className="step-image" />
      <p className="step-title">{title}</p>
    </div>
  );
};

export default StepCard;