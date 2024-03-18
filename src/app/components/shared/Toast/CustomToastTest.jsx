// Muhammed Abdelhakeem

// CustomToastTest.js
import React, { useState } from "react";
import CustomToast from "./CustomToast";

const CustomToastTest = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => showToast("Success message!", "success")}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast("Error message!", "error")}
        className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
      >
        Show Error Toast
      </button>

      {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default CustomToastTest;
