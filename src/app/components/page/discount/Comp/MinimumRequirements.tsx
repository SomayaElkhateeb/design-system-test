import { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CheckBox } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/NewDiscount';

interface State {
	selectedMinimumRequirements: string;
	isChecked: boolean;
}

const initialState: State = {
	selectedMinimumRequirements: '',
	isChecked: false,
};

const MinimumRequirements = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
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
				<>
					<SingleChoiceChips
						options={minimumRequirementsOptions}
						selected={selectedMinimumRequirements}
						setSelected={(option: string) => update({ selectedMinimumRequirements: option })}
					/>

					{selectedMinimumRequirements === t('Minimum price') && (
						<div className='w-[390px]'>
							<FormField
								formStore={formStore}
								name='sales'
								label={t('Mini purchase price')}
								render={(field) => <Input {...field} />}
							/>
						</div>
					)}
					{selectedMinimumRequirements === t('Minimum quantity') && (
						<div className='w-[390px]'>
							<FormField
								formStore={formStore}
								name='miniQuantity'
								label={t('Mini purchase quantity')}
								render={(field) => <Input {...field} />}
							/>
						</div>
					)}
				</>
			)}
		</section>
	);
};

export default MinimumRequirements;
