import React, { useState } from "react";
import { LocationIcon } from "src/app/utils/icons";

//! How To use

// const Component = () => {
//   const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
//   const [option, setOption] = useState("");
//   console.log(option);

//   return (
//     <div>
//       <SingleChoiceChips options={options} setOption={setOption} />
//     </div>
//   );
// };

const SingleChoiceChips = ({ options, setOption }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setOption(option);
    // console.log(option); // Log the selected option
  };

  return (
    <div>
      <div className="flex gap-2 p-2">
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option}
            isSelected={option === selectedOption}
            hasIcon={true} // Set to true if you want icons
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleChoiceChips;

const Chip = ({ label, isSelected, hasIcon, onSelect }) => {
  const baseStyle =
    "flex items-center border p-1 pr-2 w-fit rounded-full cursor-pointer transition-all";
  const notSelectedStyle =
    "bg-white border-border-color text-subtitle hover:bg-gray-100";
  const selectedStyle = "bg-secondary border-secondary text-white";

  return (
    <div
      className={`${baseStyle} ${
        isSelected ? selectedStyle : notSelectedStyle
      }`}
      onClick={() => onSelect(label)}
    >
      {hasIcon && (
        <LocationIcon
          className={`fill-subtitle ${isSelected ? "fill-white" : ""} `}
        />
      )}
      <span
        className={` paragraph ${isSelected ? "text-white" : "text-subtitle"} `}
      >
        {label}
      </span>
    </div>
  );
};
