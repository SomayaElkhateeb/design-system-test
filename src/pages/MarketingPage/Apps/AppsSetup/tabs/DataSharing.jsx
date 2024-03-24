import { useState } from "react";
import { InputRow, SelectBoxRow } from "src/app/components/optimized";
import CheckboxInput from "src/app/components/shared/MuHakeem/Comp/InputsFields/InputsCollection/CheckboxInput";
// import { Checkbox, InputRow, SelectBoxRow } from "src/app/components";

const DataSharing = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputState, setInputState] = useState({
    selectedValue: "Select an option",
    value: "",
  });

  const { selectedValue, value } = inputState;

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
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
      <CheckboxInput
        label="Activate data sharing"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

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
