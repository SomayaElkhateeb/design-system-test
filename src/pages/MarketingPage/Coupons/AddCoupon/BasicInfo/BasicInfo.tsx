import React from "react";
import { InputRow } from "src/app/components/optimized";
import SingleChoiceChips from "src/app/components/optimized/ChoiceChips/SingleChoiceChips";

const BasicInfo: React.FC = () => {
  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]">
      <h3 className="text-title font-semibold mb-2">Basic info</h3>
      <div className="flex flex-col gap-[1rem]">
        <div className="w-[24rem]">
          <InputRow label="coupon code" />
        </div>
      </div>

      <section>
        <h5 className="text-sm text-pri-dark font-semibold mb-2">
          Discount Type
        </h5>
        {/* <SingleChoiceChips
          options={discountTypesOptions}
          setOption={setDiscountType}
        /> */}

        {/* <DiscountTypesOptions discountType={discountType} /> */}
      </section>

      {/* <section className="mt-[18px]">
        <h5 className="text-sm text-pri-dark font-semibold mb-2">Apply to</h5>
        <SingleChoiceChips options={applyToOptions} setOption={setApplyTo} />
        <ApplyToOptions applyTo={applyTo} />
      </section> */}
    </div>
  );
};

export default BasicInfo;
