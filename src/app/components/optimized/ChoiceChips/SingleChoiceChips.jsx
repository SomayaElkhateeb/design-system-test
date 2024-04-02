import React, { useState } from "react";

//! How To use

/**
 * SingleChoiceChips Component
 * @param options An array of options to display as chips
 * @param setOption Function to set the selected option
 * @param icon Optional icon component to display with each chip
 * @param type Type of options: 'array' or 'object'
 */

const SingleChoiceChips = ({ options, setOption, icon, type }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setOption(option);
  };

  return (
    <div>
      <div className="flex gap-2">
        {options.map((option, index) => (
          <Chip
            key={index}
            label={type === "array" ? option : option.key}
            value={type === "array" ? option : option.value}
            isSelected={
              type === "array"
                ? option === selectedOption
                : option.value === selectedOption
            }
            label={option}
            isSelected={option === selectedOption}
            icon={icon}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleChoiceChips;

/**
 * Chip Component
 * @param label The text label for the chip
 * @param value The value associated with the chip
 * @param isSelected Boolean indicating whether the chip is selected
 * @param icon Optional icon component to display with the chip
 * @param onSelect Function to handle chip selection
 */

// const Chip = ({ label, value, isSelected, icon, onSelect }) => {

const Chip = ({ label, isSelected, icon, onSelect }) => {
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
      onClick={() => onSelect(value)}
    >
      {icon && <div className="mr-1">{icon}</div>}
      <span
        className={`paragraph ${isSelected ? "text-white" : "text-subtitle"} `}
      >
        {label}
      </span>
    </div>
  );
};

/*
Usage Example:
import React, { useState } from "react";
import SingleChoiceChips from "./SingleChoiceChips";
import { LocationIcon } from "src/app/utils/icons";

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const simpleOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  const keyValueOptions = [
    { key: "Option 1", value: "Value 1" },
    { key: "Option 2", value: "Value 2" },
    { key: "Option 3", value: "Value 3" },
    { key: "Option 4", value: "Value 4" },
    { key: "Option 5", value: "Value 5" },
  ];

  return (
    <div>
      <SingleChoiceChips
        options={simpleOptions}
        setOption={handleOptionSelect}
        icon={<LocationIcon />} // Optional icon
        type="simple"
      />
      <SingleChoiceChips
        options={keyValueOptions}
        setOption={handleOptionSelect}
        type="keyValue"
      />
   </div>
  );
};

export default MyComponent;
*/
