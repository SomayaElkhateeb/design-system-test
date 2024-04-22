import { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CheckBox, InputRow } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { DiscountFormStore } from 'src/pages/MarketingPage/Discounts/NewDiscount/NewDiscount';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

interface State {
	selectedMinimumRequirements: string;
	isChecked: boolean;
}

const initialState: State = {
	selectedMinimumRequirements: '',
	isChecked: false,
};

const MinimumRequirements = ({ formStore }: { formStore: DiscountFormStore }) => {
	const { t } = useTranslation();
	const [updateState, setUpdateState] = useState<State>(initialState);
	const { selectedMinimumRequirements, isChecked } = updateState;

	// Update state
	const update = (newValue: Partial<State>) => {
		setUpdateState((prevState) => ({
			...prevState,
			...newValue,
		}));
	};

	const handleCheckboxChange = (newValue: boolean) => {
		update({ isChecked: newValue });
	};
	const minimumRequirementsOptions = [t('Minimum price'), t('Minimum quantity')].map(
		(option) => option,
	);

	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>{t('Minimum requirements')}</h3>

			<CheckBox label={t('define minimum requirements')} handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<SingleChoiceChips
					options={minimumRequirementsOptions}
					selected={selectedMinimumRequirements}
					setSelected={(option: string) => update({ selectedMinimumRequirements: option })}
				/>
			)}

			{selectedMinimumRequirements === 'Minimum price' && (
				<div className='w-[390px]'>
					<FormField
						formStore={formStore}
						name='MiniPrice'
						label={t('Mini purchase price')}
						render={(field) => {
							return <Input {...field} type='number' />;
						}}
					/>
				</div>
			)}
			{selectedMinimumRequirements === 'Minimum quantity' && (
				<div className='w-[390px]'>
					<FormField
						formStore={formStore}
						name='MiniQuantity'
						label={t('Mini purchase quantity')}
						render={(field) => {
							return <Input {...field} type='number' />;
						}}
					/>
				</div>
			)}
		</section>
	);
};

export default MinimumRequirements;
