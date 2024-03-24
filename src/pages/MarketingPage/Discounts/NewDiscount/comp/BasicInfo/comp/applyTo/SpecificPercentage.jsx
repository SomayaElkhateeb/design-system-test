import { InputRow } from "src/app/components/optimized";

const SpecificPercentage = () => {
  return (
    <div className="pt-[18px]">
      {/* percentage input */}
      <div className="w-[390px]">
        <InputRow label="percentage" />
      </div>
      {/* quantity input */}
      <div className="w-[390px]">
        <InputRow label="quantity" />
      </div>
    </div>
  );
};

export default SpecificPercentage;
