import React, { useState } from 'react';
import { InputRow } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { discountTypesOptions, applyToOptions } from '../comp/data';
import DiscountTypesOptions from './comp/DiscountTypesOptions';
import ApplyToOptions from './comp/ApplyToOptions';

const BasicInfo: React.FC = () => {
	const [selectedOptionType, setSelectedOptionType] = useState<string>('');
	const [selectedOptionApply, setSelectedOptionApply] = useState<string>('');

	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold mb-2'>Basic info</h3>
			<div className='flex flex-col gap-[1rem]'>
				<div className='w-[24rem]'>
					<InputRow label='discount name' />
				</div>
			</div>

			<section>
				<h5 className='text-sm text-pri-dark font-semibold mb-2'>Discount Type</h5>
				<SingleChoiceChips
					options={discountTypesOptions}
					selected={selectedOptionType}
					setSelected={(option: string) => setSelectedOptionType(option)}
				/>

				<DiscountTypesOptions discountType={selectedOptionType} />
			</section>

			<section>
				<h5 className='text-sm text-pri-dark font-semibold pb-2'>Apply to</h5>
				<SingleChoiceChips
					options={applyToOptions}
					selected={selectedOptionApply}
					setSelected={(option: string) => setSelectedOptionApply(option)}
				/>
				<ApplyToOptions applyTo={selectedOptionApply} />
			</section>
		</div>
	);
};

export default BasicInfo;
