import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <label
      className="flex items-center cursor-pointer mb-4 "
      onClick={() => toggleSwitch()}
    >
      <span
        className={`relative rounded-full w-12 h-6 mr-2 flex items-center px-1 ${
          isOn ? "bg-green-400" : "bg-red-400"
        }`}
      >
        <span
          className={`absolute block w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
            isOn ? "translate-x-6" : ""
          }`}
        ></span>
      </span>
      <span className="text-sm font-medium">{isOn ? "On" : "Off"}</span>
    </label>
  );
};

export default ToggleSwitch;
