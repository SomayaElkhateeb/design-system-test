import React, { useState } from "react";
import { GoShieldCheck } from "react-icons/go";

const StrengthPassword = ({
  label = "Password",
  placeholder = "Enter your password",
}) => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [helperText, setHelperText] = useState("Weak");

  const passwordStrength = (password) => {
    let score = 0;
    if (password.length > 5) score += 20;
    if (password.length > 8) score += 20;
    if (/[a-z]/.test(password)) score += 20;
    if (/[A-Z]/.test(password)) score += 20;
    if (/[0-9]/.test(password)) score += 20;
    if (/[^a-zA-Z0-9]/.test(password)) score += 20;

    setStrength(score);

    if (score <= 20) setHelperText("Weak");
    else if (score <= 40) setHelperText("Moderate");
    else if (score <= 60) setHelperText("Good");
    else if (score <= 80) setHelperText("Strong");
    else setHelperText("Very Strong");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    passwordStrength(event.target.value);
  };

  const getStrengthColor = (strength) => {
    if (strength <= 20) return "bg-red-500";
    if (strength <= 40) return "bg-orange-500";
    if (strength <= 60) return "bg-yellow-500";
    if (strength <= 80) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="mb-4">
      <label htmlFor="password" className="text-sm text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10"
          placeholder={placeholder}
          onChange={handlePasswordChange}
        />
        <div className="flex justify-between">
          <div
            className={`h-[6px] max-w-32 mt-2 rounded-full overflow-hidden ${getStrengthColor(
              strength
            )}`}
            style={{ width: `${strength}%` }}
          ></div>
          <div className="flex justify-between items-center mt-2 ">
            {password && (
              <span className="text-xs text-gray-500">{helperText}</span>
            )}
            {/* <span className="text-xs text-gray-500">{`${strength}%`}</span> */}
          </div>
        </div>
        <span className="absolute left-3 top-2 text-gray-400">
          <GoShieldCheck size={24} />
        </span>
      </div>
    </div>
  );
};

export default StrengthPassword;
