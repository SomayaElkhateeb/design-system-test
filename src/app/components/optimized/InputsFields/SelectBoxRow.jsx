import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const SelectBoxRow = ({
  label,
  options,
  loading,
  error,
  success,
  leftIcon,
  rightIcon,
  selectedValue,
  handleSelectChange,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const getInputClassNames = () => {
    if (focused && !success) {
      return "border-blue-500";
    } else if (success) {
      return "border-green-500 bg-gray-50";
    } else if (error) {
      return "border-red-500 bg-gray-50";
    }
    return "bg-gray-50 ";
  };

  const classNames = getInputClassNames();

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={rest.name} className="block text-sm ">
          {label}
        </label>
        <div
          className={`${classNames} overflow-hidden rounded-md w-full border`}
        >
          <div className="relative">
            {leftIcon && (
              <div className="absolute inset-y-0 left-0 flex items-center  p-5 bg-gray-200 ">
                {leftIcon}
              </div>
            )}
            <select
              className={`block w-full px-3 py-2 border rounded focus:outline-none border-none outline-none ${
                leftIcon && "px-16"
              } ${loading && "appearance-none"}`}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              disabled={loading}
              value={selectedValue}
              onChange={(e) => handleSelectChange(e.target.value)}
              {...rest}
            >
              <option disabled value="">
                {selectedValue}
              </option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {rightIcon && !loading && (
              <div className="absolute inset-y-0 right-0 flex items-center p-5 bg-gray-200">
                {rightIcon}
              </div>
            )}
            {loading && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ClipLoader size={16} />
              </div>
            )}
          </div>
        </div>

        {error && !focused && (
          <small className="text-red-500 text-xs">Error</small>
        )}
        {success && !focused && (
          <small className="text-green-500 text-xs">Success</small>
        )}
      </div>
    </>
  );
};

export default SelectBoxRow;
SelectBoxRow.defaultProps = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};
