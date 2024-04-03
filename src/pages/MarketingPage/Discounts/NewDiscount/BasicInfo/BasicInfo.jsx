import SingleChoiceChips from "src/app/components/optimized/ChoiceChips/SingleChoiceChips";
import { InputRow } from "src/app/components/optimized";
import ApplyToOptions from "./comp/ApplyToOptions";
import DiscountTypesOptions from "./comp/DiscountTypesOptions";
import { applyToOptions, discountTypesOptions } from "../comp/data";
import useDiscountForm from "../comp/useDiscountForm";

const BasicInfo = () => {
  const {
    discountName,
    setDiscountName,
    discountNameRef,
    discountType,
    setDiscountType,
    applyTo,
    setApplyTo,
  } = useDiscountForm();
  console.log("discountName", discountName);
  console.log("discountType", discountType);
  console.log("applyTo", applyTo);
  return (
    <div className="bg-white w-full border border-constrained rounded-md p-[18px]">
      <h3 className="text-title font-semibold mb-2">Basic info</h3>
      <div className="flex flex-col gap-[18px]">
        <div className="w-[390px]">
          <InputRow
            id="discountName"
            value={discountName}
            onChange={setDiscountName}
            label="Discount name"
            ref={discountNameRef}
          />
        </div>
      </div>

      <section className="mt-[18px]">
        <h5 className="text-sm text-pri-dark font-semibold mb-2">
          Discount Type
        </h5>
        <SingleChoiceChips
          options={discountTypesOptions}
          setOption={setDiscountType}
        />

        <DiscountTypesOptions discountType={discountType} />
      </section>

      <section className="mt-[18px]">
        <h5 className="text-sm text-pri-dark font-semibold mb-2">Apply to</h5>
        <SingleChoiceChips options={applyToOptions} setOption={setApplyTo} />
        <ApplyToOptions applyTo={applyTo} />
      </section>
    </div>
  );
};

export default BasicInfo;
