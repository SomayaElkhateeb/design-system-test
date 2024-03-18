import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getImageUrl } from "src/app/utils";

const SelectWithImage = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setValue] = useState("Select an Option");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChange = (value) => {
    setValue(value);
    console.log(selectedValue);
  };

  return (
    <div className="relative inline-block w-[300px]">
      <button
        type="button"
        onClick={toggleDropdown}
        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between w-full"
      >
        {value ? (
          <div className="flex items-center">
            <img
              className="w-6 h-6 mr-2"
              src={options.find((option) => option.value === value).imageUrl}
              alt=""
            />
            <span>
              {options.find((option) => option.value === value).label}
            </span>
          </div>
        ) : (
          <span>{selectedValue}</span>
        )}

        <FaChevronDown />
      </button>
      {isOpen && (
        <ul className="absolute z-10 top-full left-0 bg-white shadow-md rounded-md w-full overflow-y-auto max-h-40">
          {options.map((option) => (
            <li
              key={option.value}
              className="hover:bg-gray-100 px-3 py-2 cursor-pointer flex items-center"
              onClick={() => {
                handleChange(option.value);
                setIsOpen(false);
              }}
            >
              <img
                className="w-6 h-6 mr-2"
                src={getImageUrl("social/facebook.svg")}
                alt=""
              />
              {/* <img className="w-6 h-6 mr-2" src={option.imageUrl} alt="" /> */}
              <span>{option.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectWithImage;

SelectWithImage.defaultProps = {
  options: [
    { value: "option1", imageUrl: "https://placehold.co/600x400" },
    { value: "option2", imageUrl: "https://placehold.co/600x400" },
    { value: "option3", imageUrl: "https://placehold.co/600x400" },
  ],
};
