import { InputRow } from "src/app/components/optimized";
import SelectButtons from "../../../comp/SelectButtons";
import { applyTo, discountType } from "../../../comp/data";

const BasicInfo = () => {
  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Basic Info</h3>

      <div className="flex flex-col gap-[18px]">
        {/* Discount name */}
        <div className="w-[390px]">
          <InputRow label="discount name" />
        </div>

        {/* discount type */}
        <div>
          <h5 className="text-sm text-pri-dark font-semibold mb-2">
            Discount Type
          </h5>
          <SelectButtons data={discountType} />
        </div>

        {/* apply to */}
        <div>
          <h5 className="text-sm text-pri-dark font-semibold mb-2">Apply to</h5>
          <SelectButtons data={applyTo} />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
