import React, { useState } from "react";
import { FaRegFlag } from "react-icons/fa";

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Initial language

  const languages = [
    {
      value: "en",
      label: "English",
      icon: <FaRegFlag size={20} />,
    },
    {
      value: "ar",
      label: "عربي",
      icon: <FaRegFlag size={20} />,
    },
  ];

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language.value);
  };

  return (
    <div className="flex flex-wrap gap-2 flex-row-reverse">
      {languages.map((language) => (
        <button
          key={language.value}
          type="button"
          className={`px-3 py-2  rounded-md text-sm font-medium flex items-center space-x-2 ${
            selectedLanguage === language.value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleLanguageClick(language)}
        >
          <span>{language.icon}</span>
          <span>{language.label}</span>
        </button>
      ))}

      <input
        type="text"
        className="w-full  py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-2"
        placeholder="Placeholder"
      />
    </div>
  );
};

export default LanguageSelect;
