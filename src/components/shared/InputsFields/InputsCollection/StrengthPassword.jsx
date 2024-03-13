// Muhammed Abdelhakeem

import React, { useState } from "react";

const StrengthPassword = () => {
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
    <div className="relative mb-4">
      <label htmlFor="password" className="text-sm text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10"
        placeholder="Enter your password"
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
      <span className="absolute left-3 top-8 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          classname="bi bi-shield-lock"
          viewBox="0 0 16 16"
        >
          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
        </svg>
      </span>
    </div>
  );
};

export default StrengthPassword;
