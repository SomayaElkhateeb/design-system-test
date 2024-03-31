import { useState } from "react";
import { CheckBox } from "src/app/components/optimized";
import SingleChoiceChips from "src/app/components/optimized/ChoiceChips/SingleChoiceChips";
import OptionsMinimumReq from "./OptionsMinimumReq";

const minimumRequirementsOptions = ["Minimum price", "Minimum quantity"].map(
  (option) => option
);

const MinimumRequirements = () => {
  const [minimumReq, setMinimumReq] = useState("");
  const [showSelectButtons, setShowSelectButtons] = useState(false);

  const handleCheckBoxClick = () => {
    setShowSelectButtons(!showSelectButtons);
  };

  const handleMinimumChange = (value) => {
    setMinimumReq(value);
  };

  console.log("minimumReq", minimumReq);
  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold">Minimum requirements</h3>

      <div className="py-[18px]">
        <CheckBox
          onChange={handleCheckBoxClick}
          label="define minimum requirement"
        />
      </div>

      {showSelectButtons && (
        <SingleChoiceChips
          options={minimumRequirementsOptions}
          setOption={handleMinimumChange}
        />
      )}

      <OptionsMinimumReq optionType={minimumReq} />
    </div>
  );
};

export default MinimumRequirements;
