import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckBox, InputRow } from 'src/app/components/optimized';

const Limits: React.FC = ({ setState, used }) => {
	const { t } = useTranslation();
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
			<h3 className='text-title font-semibold'>{t('Limits')}</h3>
			<CheckBox
				label={t('Limit number of times this coupon can be used in total')}
				handleOnChange={handleCheckboxChange}
			/>

			{isChecked && (
				<div className='w-[24rem]'>
					<InputRow label={t('Usage number')} type='number' value={used} onChange={handleChange} />
				</div>
			)}

			<CheckBox label={t('Limit to one use per customer')} />
		</section>
	);
};

export default Limits;
