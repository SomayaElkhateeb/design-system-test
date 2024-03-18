import React, { useState } from "react";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // defaulting to today, for example

  // This is a very basic way to format the date. For robust applications, consider using a library like date-fns or moment.js.
  const dayOfWeek = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedTimeRange =
    selectedDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    " - " +
    selectedDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{dayOfWeek}</span>
        </div>
        <input
          type="datetime-local"
          className="appearance-none block w-full bg-white pl-20 pr-10 py-2 border border-gray-300 rounded-full text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Select date and time"
          value={selectedDate.toISOString().substring(0, 16)}
          onChange={handleDateChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
      <div className="mt-1 pl-3">
        <span className="text-sm text-gray-500">{formattedTimeRange}</span>
      </div>
    </div>
  );
};

export default CustomDatePicker;
