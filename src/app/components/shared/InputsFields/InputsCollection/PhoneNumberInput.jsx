import React, { useState } from "react";
import { FaRegFlag } from "react-icons/fa";

const countries = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+333", name: "France" },
  // Add more countries as needed
];

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState("+1"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <span className="px-3">
        <FaRegFlag size={20} />
      </span>
      <select
        value={countryCode}
        onChange={handleCountryCodeChange}
        className="w-[70px] px-1 py-2 border-r border-gray-300 rounded-l-md focus:outline-none"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code}
            {/* ({country.name}) */}
          </option>
        ))}
      </select>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Phone Number"
        className="w-full px-3 py-2 focus:outline-none rounded-r-md"
      />
    </div>
  );
};

export default PhoneNumberInput
