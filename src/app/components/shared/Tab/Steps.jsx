import React, { useState } from "react";
import { MdDone } from "react-icons/md";

const Steps = ({ steps }) => {
  return (
    <>
      <VStep steps={steps} />
      <HStep steps={steps} />
    </>
  );
};

const VStep = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="flex items-center space-y-4">
      <ul className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center relative">
            <div
              className={`z-20 w-10 h-4 rounded-md p-3 flex justify-center items-center ${
                index <= currentStep
                  ? "bg-blue-600 text-white" // Done
                  : index - 1 === currentStep
                  ? "border-2 border-blue-500 bg-white" // Active
                  : "bg-white border-2 border-gray-300" // Not Done
              }`}
            >
              {index === currentStep + 1 && (
                <span>
                  <MdDone size={15} color="#2563EB" />
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button
        className="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 w-24"
        onClick={handleNext}
        disabled={currentStep === steps.length - 1}
      >
        Next
      </button>
    </div>
  );
};
const HStep = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <ul className="flex flex-col space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center relative">
            <div
              className={`z-20 w-8 h-8 rounded-full flex justify-center items-center ${
                index <= currentStep
                  ? "bg-blue-600 text-white" // Done
                  : index - 1 === currentStep
                  ? "border-2 border-blue-500 bg-white" // Active
                  : "bg-white border" // Not Done
              }`}
            >
              {index === currentStep ? (
                <span className="text-sm">&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-full w-0.5 z-10 bg-blue-600 absolute left-[15px] top-4 ${
                  index > currentStep ? "opacity-25" : ""
                }`}
              />
            )}
            <div className="flex-grow ml-2 text-sm">{step.title}</div>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 w-24"
        onClick={handleNext}
        disabled={currentStep === steps.length - 1}
      >
        Next
      </button>
    </div>
  );
};
export default Steps;

Steps.defaultProps = {
  steps: [{ title: "Active" }, { title: "Done" }, { title: "Not Done" }],
};

