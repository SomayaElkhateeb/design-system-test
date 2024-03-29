import { useState } from "react";
import { CheckBox, InputRow, SelectBoxRow } from "src/app/components/optimized";

const DataSharing = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputState, setInputState] = useState({
    selectedValue: "Select an option",
    value: "",
  });

  const { selectedValue, value } = inputState;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (value) => {
    setInputState({ ...inputState, value });
  };

  const handleSelectChange = (value) => {
    setInputState((prevState) => ({
      ...prevState,
      selectedValue: value,
    }));
  };
  return (
    <div>
      <p className="mb-3 ">
        {data.description} <a href="#">Learn more</a>
      </p>
      <CheckBox label="Activate data sharing" onChange={handleCheckboxChange} />

      {isChecked && (
        <div className="w-1/3 flex flex-col space-y-3 ">
          <InputRow
            label="Pixel ID"
            value={inputState.value}
            onChange={handleInputChange}
          />
          <SelectBoxRow
            label="Tracked action"
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default DataSharing;
