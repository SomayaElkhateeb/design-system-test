import { useState } from "react";
import SelectButtons from "../../../comp/SelectButtons";
import { DiscountMinimunRequirements } from "../../../comp/data";
import { CheckBox } from "src/app/components/optimized";

const MinimumRequirements = () => {
  const [showSelectButtons, setShowSelectButtons] = useState(false);

  const handleCheckBoxClick = () => {
    setShowSelectButtons(!showSelectButtons);
  };

  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Minimum requirements</h3>

      <div className="pt-[18px] flex gap-2 items-center">
        <CheckBox onChange={handleCheckBoxClick} />
        <p className="text-title text-sm">define minimum requirement</p>
      </div>

      {showSelectButtons && (
        <div className="pt-[18px]">
          <SelectButtons data={DiscountMinimunRequirements} />
        </div>
      )}
    </div>
  );
};

export default MinimumRequirements;
