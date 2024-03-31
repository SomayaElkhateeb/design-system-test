import React, { useState, ChangeEvent } from "react";
import { ClipLoader } from "react-spinners";

interface InputRowProps {
  label?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  loading?: boolean;
  error?: string;
  success?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputRow: React.FC<InputRowProps> = ({
  label,
  leftIcon,
  rightIcon,
  loading,
  error,
  success,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    return "bg-gray-50";
  };

  const classNames = getInputClassNames();

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={label} className="block text-sm ">
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
          <small className=" text-green-500 text-xs">{success}</small>
        )}
      </div>
    </>
  );
};

export default InputRow;

/*
How to Use:

Example:
import { FaUser, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const MyComponent = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    // Add your validation logic here
  };

  return (
    <div>
      <InputRow
        label="Username"
        leftIcon={<FaUser />}
        rightIcon={<FaCheckCircle />}
        loading={loading}
        error={error}
        success={success}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Explanation:
- label: An optional The text label displayed above the input field.
- leftIcon: An optional icon to display on the left side of the input field.
- rightIcon: An optional icon to display on the right side of the input field.
- loading: A boolean flag indicating whether the input field is in a loading state.
- error: An optional error message to display below the input field when there is an error.
- success: An optional success message to display below the input field when the input is successful.
- value: The current value of the input field.
- onChange: A callback function to handle changes to the input field value.
*/
