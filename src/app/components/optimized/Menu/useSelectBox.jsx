import { useState } from "react";

const useSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, selectedOption, handleSelect, handleButtonClick };
};

export default useSelectBox;
