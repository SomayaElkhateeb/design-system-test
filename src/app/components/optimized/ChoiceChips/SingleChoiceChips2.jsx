import React, { useState } from "react";

//! How To use

// const Component = () => {
//   const options = [
//     { key: "Option 1", value: "Value 1" },
//     { key: "Option 2", value: "Value 2" },
//     { key: "Option 3", value: "Value 3" },
//     { key: "Option 4", value: "Value 4" },
//     { key: "Option 5", value: "Value 5" },
//   ];
//   const [option, setOption] = useState("");
//   return (
//     <div>
//       <SingleChoiceChips options={options} setOption={setOption} />
//     </div>
//   );
// };

const SingleChoiceChips2 = ({ options, setOption, icon }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setOption(option);
  };

  return (
    <div>
      <div className="flex gap-2 p-2">
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option.key}
            value={option.value}
            isSelected={option.value === selectedOption}
            icon={icon}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleChoiceChips2;

const Chip = ({ label, value, isSelected, icon, onSelect }) => {
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
