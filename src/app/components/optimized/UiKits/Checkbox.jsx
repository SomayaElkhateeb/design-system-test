import { useState } from "react";
import { CheckIcon } from "src/app/utils/icons";

const CheckBox = ({ variant, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    // Call the onChange function with the new value
    if (onChange) {
      onChange(newValue);
    }
  };

  switch (variant) {
    case "minus":
      return (
        <div
          onClick={handleToggle}
          className={`hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${
            checked && "bg-success hover:bg-sec-pressed"
          }`}
        >
          {checked && (
            <p className="text-white flex justify-center items-center h-full w-full">
              -
            </p>
          )}
        </div>
      );
    default:
      return (
        <div
          onClick={handleToggle}
          className={` hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${
            checked && "bg-success hover:bg-sec-pressed"
          }`}
        >
          {checked && <CheckIcon className="fill-white w-full h-full" />}
        </div>
      );
  }
};

export default CheckBox;
