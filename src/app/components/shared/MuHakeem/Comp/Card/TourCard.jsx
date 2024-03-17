import React, { useState } from "react";

const TourCard = ({ title, description, steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-5 w-96">
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="mt-4">{content[currentStep]}</div>
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-start">
          {currentStep + 1} / {steps.length}
        </span>

        <div className="flex justify-end space-x-2">
          <button
            className="disabled:opacity-50 disabled:cursor-not-allowed  text-black font-medium py-2 px-4 rounded-md mt-4"
            disabled={currentStep === 0}
            onClick={handleBackStep}
          >
            Back
          </button>
          <button
            className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4"
            disabled={currentStep === steps.length - 1}
            onClick={handleNextStep}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
const theSteps = ["Step 1", "Step 2", "Step 3"];
const content = [
  "Content for Step 1",
  "Content for Step 2",
  "Content for Step 3",
];

TourCard.defaultProps = {
  title: "How to set up your store",
  description: "A guide",
  steps: theSteps,
  content: content,
};

export default TourCard;
