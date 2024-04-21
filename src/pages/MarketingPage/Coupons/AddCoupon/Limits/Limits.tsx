import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckBox } from 'src/app/components/optimized';
import InputRow from 'src/app/components/optimized/InputsFields/InputRow';
const Limits: React.FC = () => {
	const { t } = useTranslation();
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = (newValue: boolean) => {
		setIsChecked(newValue);
	};

	const [inputState, setInputState] = useState({
		selectedValue: '',
		value: '',
		error: '',
		success: false,
	});

	function handleInputChange(value) {
		setInputState({ ...inputState, value });
		console.log('input value', value);
	}
	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>{t('Limits')}</h3>
			<CheckBox
				label={t('Limit number of times this coupon can be used in total')}
				handleOnChange={handleCheckboxChange}
			/>

			{isChecked && (
				<div className='w-[24rem]'>
					<InputRow
						label={t('Usage number')}
						type='number'
						min={0}
						handleOnChange={handleInputChange}
						value={inputState.value}
						error={inputState.error}
						success={inputState.success}
					/>
				</div>
			)}

			<CheckBox label={t('Limit to one use per customer')} />
		</section>
	);
};

export default Limits;
