import { CheckBox } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import OptionsMinimumReq from './OptionsMinimumReq';
import useDiscountForm from '../comp/useDiscountForm';
import { minimumRequirementsOptions } from '../comp/data';

const MinimumRequirements = () => {
	const { minimumReq, setShowSelectButtons, showSelectButtons, setMinimumReq } =
		useDiscountForm();

	console.log('minimumReq', minimumReq);
	console.log('showSelectButtons', showSelectButtons);
	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
			<h3 className='font-semibold text-title'>Minimum requirements</h3>

			<div className='py-[18px]'>
				<CheckBox
					onChange={setShowSelectButtons}
					label='define minimum requirement'
				/>
			</div>

			{showSelectButtons && (
				<SingleChoiceChips
					options={minimumRequirementsOptions}
					setSelected={setMinimumReq}
					selected={minimumReq}
				/>
			)}

			<OptionsMinimumReq optionType={minimumReq} />
		</div>
	);
};

export default MinimumRequirements;
