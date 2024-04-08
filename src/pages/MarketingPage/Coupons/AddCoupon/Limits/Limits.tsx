import React, { useState } from 'react';
import { CheckBox, InputRow } from 'src/app/components/optimized';

const Limits: React.FC = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [usageNumber, setUsageNumber] = useState<number>(0);

	const handleCheckboxChange = (newValue: boolean) => {
		setIsChecked(newValue);
	};

	const handleAmountFixed = (value: number) => {
		setUsageNumber(Math.max(value, 0));
	};

	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>Limits</h3>
			<CheckBox label='Limit number of times this coupon can be used in total' handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<div className='w-[24rem]'>
					<InputRow
						label='Usage number'
						type='number'
						value={usageNumber.toString()}
						onChange={(e) => handleAmountFixed(Number(e.target.value))}
					/>
				</div>
			)}

			<CheckBox label='Limit to one use per customer' />
		</section>
	);
};

export default Limits;
