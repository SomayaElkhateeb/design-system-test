import { useState } from "react";
import CheckboxInput from "src/app/components/shared/MuHakeem/Comp/InputsFields/InputsCollection/CheckboxInput";

const DataSharing = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <p className="mb-3">
        {data.description} <a href="#">Learn more</a>
      </p>
      <CheckboxInput
        label="Activate data sharing"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default DataSharing;
