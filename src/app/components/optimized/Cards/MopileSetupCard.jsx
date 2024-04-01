//? Unfinished tasks
//! =================
// todo refactoring the buttons
import React, { useState } from "react";
import { NextIcon, SuccessIcon } from "src/app/utils/icons";

/**
 * @param {object} props - Props for the MobileSetupCard component
 * @param {string} props.title - The title of the card
 * @param {string} props.description - The description of the card
 * @param {string} props.buttonText - The text to display on the button
 * @param {React.Component} props.Icon - The icon component for the card
 * @param {function} props.onButtonClick - The function to call when the button is clicked
 */

const MobileSetupCard = ({
  title,
  description,
  buttonText,
  Icon,
  onButtonClick,
}) => {
  const [isStepDone, setIsStepDone] = useState(false);

  /**
   * Handles the completion of the step and calls the provided button click handler
   */
  const handleStepCompletion = () => {
    setIsStepDone(true);
    onButtonClick();
  };

  return (
    <div
      className={`border-2 border-light-2 rounded-xl flex justify-between p-3 ${
        isStepDone ? "bg-brand-gradient" : "bg-white border-2 border-light-2"
      }`}
    >
      <div className="flex">
        <div
          className={`size-10 min-w-10 rounded-full mr-2 grid place-content-center ${
            isStepDone ? "bg-white/10 grid" : "bg-pri-top-light"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${isStepDone ? "fill-white" : "fill-primary"}`}
          />
        </div>

        <div className="w-full mb-3">
          <h5
            className={`font-semibold mb-1 text-sm ${
              isStepDone ? "text-white" : " text-title"
            }`}
          >
            {title}
          </h5>
          <p
            className={`font-normal text-sm ${
              isStepDone ? "text-white" : "text-title"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="self-center">
        {isStepDone ? (
          <SuccessIcon className="fill-white" />
        ) : (
          <button onClick={handleStepCompletion} className="focus:outline-none">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileSetupCard;

// Usage Example:
// import React from "react";
// import { AddIcon } from "./icons";
//
// const MyComponent = () => {
//   const handleButtonClick = () => {
//     console.log("Button clicked!");
//   };
//
//   return (
//     <MobileSetupCard
//       title="Title"
//       description="Description"
//       buttonText="Button Text"
//       Icon={AddIcon}
//       onButtonClick={handleButtonClick}
//     />
//   );
// };
//
// export default MyComponent;
