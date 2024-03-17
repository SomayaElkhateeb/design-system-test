import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";

const PasswordInput = ({ placeholder = "Enter your password" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full px-8 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10"
        placeholder={placeholder}
      />

      <span className="absolute left-3 top-3 text-gray-400">
        <GoShieldCheck size={24} />
      </span>
      <span
        className={`absolute right-3 top-3 cursor-pointer text-gray-400 ${
          showPassword ? "text-indigo-500" : ""
        }`}
        onClick={toggleShowPassword}
      >
        {showPassword ? (
          <IoEyeOutline size={24} />
        ) : (
          <IoEyeOffSharp size={24} />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
