import React, { useState } from "react";

/**
 * @param {object} props - Props for the SingleChoiceChips component
 * @param {Array} props.options - An array of options to display as chips
 * @param {function} props.setOption - Function to set the selected option
 * @param {React.Component} [props.icon] - Optional icon component to display with each chip
 */
const SingleChoiceChips = ({
  options,
  setOption,
  icon,
}: {
  options: string[];
  setOption: (option: string) => void;
  icon?: React.ReactNode;
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  /**
   * Handle option selection
   * @param {any} option - The selected option
   */
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setOption(option);
  };

  return (
    <div>
      <div className="flex gap-2 p-2">
        {/* Render each option as a chip */}
        {options.map((option, index) => (
          <Chip
            key={index}
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
 * @param {object} props - Props for the Chip component
 * @param {string} props.label - The text label for the chip
 * @param {boolean} props.isSelected - Boolean indicating whether the chip is selected
 * @param {React.Component} [props.icon] - Optional icon component to display with the chip
 * @param {function} props.onSelect - Function to handle chip selection
 */
const Chip = ({
  label,
  isSelected,
  icon,
  onSelect,
}: {
  label: string;
  isSelected: boolean;
  icon?: React.ReactNode;
  onSelect: (label: string) => void;
}) => {
  // Base styles for the chip
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
      {/* Icon (if provided) */}
      {icon && <div className="mr-1">{icon}</div>}
      {/* Label */}
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

    return (
      <div>
        <SingleChoiceChips
          options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
          setOption={handleOptionSelect}
          icon={<LocationIcon />} // Optional icon
        />
      </div>
    );
  };

  export default MyComponent;
*/
