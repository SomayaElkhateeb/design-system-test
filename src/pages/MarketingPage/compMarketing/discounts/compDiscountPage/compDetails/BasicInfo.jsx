import { applyTo, discountType } from "src/app/utils/constants";
import { SelectButtons } from "..";


const BasicInfo = () => {
  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Basic Info</h3>

      <div className="flex flex-col gap-[18px]">
        {/* Discount name */}


        {/* discount type */}
        <div>
          <h5 className="text-sm text-pri-dark font-semibold mb-2">Discount Type</h5>
          <SelectButtons data={discountType} />
        </div>


        {/* apply to */}
        <div>
          <h5 className="text-sm text-pri-dark font-semibold mb-2">Apply to</h5>
          <SelectButtons data={applyTo} />
        </div>
      </div>
    </div>
  )
}

export default BasicInfo;