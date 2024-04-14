import React, { useState } from 'react';
import { CheckBox, InputRow } from 'src/app/components/optimized';

const Limits: React.FC = ({ setState, used }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = (newValue: boolean) => {
		setIsChecked(newValue);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newUsed = Math.max(parseInt(e.target.value), 0);
		setState((prevState) => ({
			...prevState,
			used: newUsed,
		}));
	};

	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>Limits</h3>
			<CheckBox label='Limit number of times this coupon can be used in total' handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<div className='w-[24rem]'>
					<InputRow label='Usage number' type='number' value={used} onChange={handleChange} />
				</div>
			)}

			<CheckBox label='Limit to one use per customer' />
		</section>
	);
};

export default Limits;
