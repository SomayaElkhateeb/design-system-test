import { useState, useEffect } from "react";
import { CheckIcon } from "src/app/utils/icons";

/**
 * CheckBoxX component for customizable checkbox with optional label.
 * @param {Object} props - Props for the CheckBoxX component.
 * @param {string} props.variant - The variant of the checkbox. Can be "minus" or default.
 * @param {boolean} props.initialChecked - Initial checked state of the checkbox.
 * @param {Function} props.onChange - Change event handler for the checkbox.
 * @param {string} props.label - Optional label for the checkbox.
 * @returns {JSX.Element} CheckBoxX component.
 */

const CheckBox = ({ variant, onChange, label, initialChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (initialChecked !== undefined) {
      setIsChecked(initialChecked);
    }
  }, [initialChecked]);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderCheckboxIcon = () => {
    if (variant === "minus" && isChecked) {
      return (
        <p className="text-white flex justify-center items-center h-full w-full">
          -
        </p>
      );
    }
    return <CheckIcon className="fill-white w-full h-full" />;
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      <div
        className={`hover:bg-sec-light w-5 h-5 border rounded ${
          isChecked ? "bg-success hover:bg-sec-pressed" : ""
        }`}
      >
        {renderCheckboxIcon()}
      </div>
      {label && <span className="text-title text-sm ml-2">{label}</span>}
    </label>
  );
};

export default CheckBox;

// Example usage of CheckBoxX component

/*
const ExampleComponent = () => {
  const handleChange = (isChecked) => {
    // Handle checkbox change event
    console.log("Checkbox checked:", isChecked);
  };

  return (
    <div>
      <CheckBox
        initialChecked={true} // Initial state of the checkbox
        onChange={handleChange} // Change event handler
        label="Example Checkbox" // Optional label
      />

      <CheckBox
        variant="minus" // Specify variant as "minus"
        initialChecked={false} // Initial state of the checkbox
        onChange={handleChange} // Change event handler
        label="Minus Checkbox" // Optional label
      />
    </div>
  );
};

export default ExampleComponent; 

*/
