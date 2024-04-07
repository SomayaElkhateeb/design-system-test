import React, { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { minimumRequirementsOptions } from '../comp/data';
import { CheckBox } from 'src/app/components/optimized';

const MinimumRequirements: React.FC = () => {
	const [selectedMinimumRequirements, setSelectedMinimumRequirements] = useState<string>('');
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = (newValue: boolean) => {
		setIsChecked(newValue);
	};
	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>Minimum requirements</h3>

			<CheckBox label='define minimum requirements' handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<SingleChoiceChips
					options={minimumRequirementsOptions}
					selected={selectedMinimumRequirements}
					setSelected={(option: string) => setSelectedMinimumRequirements(option)}
				/>
			)}

			{/* <CustomerSegmentOptions segmentOptions={selectedSegmentType} /> */}
		</section>
	);
};

export default MinimumRequirements;
