import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-0.5">
      <div
        className="flex justify-between items-center p-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="ml-2">
          {isOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
        </span>
      </div>
      {isOpen && <div className="p-3 border-t border-gray-300">{children}</div>}
    </div>
  );
};

export default Accordion;
