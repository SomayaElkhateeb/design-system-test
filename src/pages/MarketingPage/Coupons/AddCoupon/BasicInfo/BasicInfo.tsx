import React from 'react';
import { InputRow } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

const BasicInfo: React.FC = () => {
	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='mb-2 font-semibold text-title'>Basic info</h3>
			<div className='flex flex-col gap-[1rem]'>
				<div className='w-[24rem]'>
					<InputRow label='coupon code' />
				</div>
			</div>

			<section>
				<h5 className='mb-2 text-sm font-semibold text-pri-dark'>
					Discount Type
				</h5>
				{/* <SingleChoiceChips
          options={discountTypesOptions}
          setOption={setDiscountType}
        /> */}

				{/* <DiscountTypesOptions discountType={discountType} /> */}
			</section>

			{/* <section className="mt-[18px]">
        <h5 className="mb-2 text-sm font-semibold text-pri-dark">Apply to</h5>
        <SingleChoiceChips options={applyToOptions} setOption={setApplyTo} />
        <ApplyToOptions applyTo={applyTo} />
      </section> */}
		</div>
	);
};

export default BasicInfo;
