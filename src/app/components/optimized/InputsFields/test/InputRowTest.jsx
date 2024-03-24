import { useState } from "react";
import { FiAlertCircle, FiSearch } from "react-icons/fi";
import InputRow from "../InputRow";

const InputRowTest = () => {
  const [inputState, setInputState] = useState({
    selectedValue: "",
    value: "",
    loading: false,
    error: "",
    success: false,
  });

  const handleInputChange = (value) => {
    setInputState({ ...inputState, value });
    console.log(value);
  };

  const handleFormSubmit = () => {
    // Simulating asynchronous operation
    setInputState({ ...inputState, loading: true });
    setTimeout(() => {
      if (inputState.value === "success") {
        setInputState({
          ...inputState,
          success: true,
          error: "",
          loading: false,
        });
      } else {
        setInputState({
          ...inputState,
          error: "Input is not valid",
          success: false,
          loading: false,
        });
      }
    }, 2000);
  };
  return (
    <div>
      <InputRow
        value={inputState.value}
        onChange={handleInputChange}
        loading={inputState.loading}
        error={inputState.error}
        success={inputState.success}
        placeholder="Enter something..."
        leftIcon={<FiAlertCircle />}
        rightIcon={<FiSearch />}
        label="Search"
      />

      <button
        onClick={handleFormSubmit}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default InputRowTest;
