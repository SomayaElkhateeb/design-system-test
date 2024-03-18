import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <label
      className="flex items-center cursor-pointer"
      onClick={() => toggleSwitch()}
    >
      <span
        className={`relative rounded-full w-[32px] h-[17px] mr-2 flex items-center px-1 ${
          isOn ? "bg-secondary" : "bg-inactive"
        }`}
      >
        <span
          className={`absolute block w-[13px] h-[13px] rounded-full bg-white shadow-sm transition-transform ${
            isOn ? "translate-x-3" : ""
          }`}
        ></span>
      </span>
      <span className="text-sm text-title">{isOn ? "On" : "Off"}</span> 
    </label>
  );
};

export default ToggleSwitch;
