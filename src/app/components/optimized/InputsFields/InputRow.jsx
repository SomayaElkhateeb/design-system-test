import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const InputRow = ({
  label,
  leftIcon,
  rightIcon,
  loading,
  error,
  success,
  value,
  onChange,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const getInputClassNames = () => {
    if (focused) {
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
        <label htmlFor={name} className="block text-sm ">
          {label}
        </label>
        <div
          className={`${classNames} overflow-hidden rounded-md w-full border`}
        >
          <div className="relative">
            {leftIcon && (
              <div className="absolute inset-y-0 left-0 flex items-center  p-4 ">
                {leftIcon}
              </div>
            )}
            <input
              className={`${
                leftIcon && "pl-16"
              } block w-full px-4 py-2 border rounded focus:outline-none  border-none outline-none`}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              disabled={loading}
              value={value}
              onChange={handleInputChange}
              {...rest}
            />
            {rightIcon && !loading && (
              <div className="absolute inset-y-0 right-0 flex items-center p-4">
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
          <small className=" text-red-500 text-xs">{error}</small>
        )}
        {success && !focused && (
          <small className=" text-green-500 text-xs">Success</small>
        )}
      </div>
    </>
  );
};

export default InputRow;
