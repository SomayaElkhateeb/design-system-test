import { useEffect, useState } from "react";

const SelectBox = ({ options, onSelect, selectedOptionId, buttonClassName }) => {
  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          className={`${buttonClassName} focus:outline-none ${option.id === selectedOptionId ? 'text-white bg-secondary' : ''}`}
          onClick={() => onSelect(option)}
        >
          {option.textBtn}
        </button>
      ))}
    </div>
  );
};

const SelectButtons = ({ data }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  useEffect(() => {
    setSelectedOptionId(data[0]?.id); // Automatically select the first option when the component mounts
  }, [data]);

  const handleSelect = (option) => {
    setSelectedOptionId(option.id);
    setSelectedOptionId(option.value);
  };

  return (
    <div>
      <SelectBox options={data} onSelect={handleSelect} selectedOptionId={selectedOptionId} buttonClassName="btn-rounded" />
      {selectedOptionId && (
        // Check if the selected option has a component property and if it's a function before calling it
        typeof data.find((option) => option.id === selectedOptionId)?.component === 'function' &&
        data.find((option) => option.id === selectedOptionId)?.component()
      )}
    </div>
  );
};

export default SelectButtons;

