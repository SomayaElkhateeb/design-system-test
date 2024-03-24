import { useState } from "react";
import { AddIcon, CheckIcon } from "src/app/utils/icons";

//! How To use

// const Component = () => {
//   const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
//   const [Options, setOptions] = useState([]);
//   console.log(Options);
// 
//   return (
//     <div>
//       <MultiChoiceChips options={options} setOptions={setOptions} />
//     </div>
//   );
// };

const MultiChoiceChips = ({ options, setOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    const currentIndex = selectedOptions.indexOf(option);
    const newSelectedOptions = [...selectedOptions]; // Clone the array to avoid mutation
    if (currentIndex === -1) {
      newSelectedOptions.push(option); // Add option if not already selected
    } else {
      newSelectedOptions.splice(currentIndex, 1); // Remove option if already selected
    }
    setSelectedOptions(newSelectedOptions);
    setOptions(newSelectedOptions);
    // console.log(newSelectedOptions); // Log the current selected options
  };
  return (
    <div>
      <div className="flex flex-wrap gap-2 p-2">
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option}
            isSelected={selectedOptions.includes(option)}
            onToggle={() => toggleOption(option)}
          />
        ))}
      </div>
    </div>
  );
};
export default MultiChoiceChips;

// 
// 
// 

const Chip = ({ label, isSelected, onToggle }) => {
  const baseStyle =
    "py-1 pr-2 flex items-center border w-fit rounded-full cursor-pointer transition-all";
  const notSelectedStyle =
    "bg-white border-border-color text-subtitle hover:bg-gray-100";
  const selectedStyle = "border-sec-pressed text-sec-pressed bg-sec-light";
  return (
    <div
      className={`${baseStyle} ${
        isSelected ? selectedStyle : notSelectedStyle
      }`}
      onClick={onToggle}
    >
      {isSelected ? (
        <CheckIcon className="fill-sec-pressed" />
      ) : (
        <AddIcon className="fill-hint" />
      )}
      <span
        className={`paragraph ${
          isSelected ? "text-sec-pressed" : "text-subtitle"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
