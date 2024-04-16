import React, { useState } from 'react';
import { InputRow } from 'src/app/components/optimized';
import { AiOutlinePercentage } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

interface selectedOptionType {
	discountType: string;
	discount: number;
}

const DiscountTypesOptions: React.FC<selectedOptionType> = ({ discountType, discount, fixedAmount, setState }) => {
	const { t } = useTranslation();
	const [amountPercentage, setAmountPercentage] = useState(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFixedAmount = Math.max(parseInt(e.target.value), 0);
		setState((prevState) => ({
			...prevState,
			fixedAmount: newFixedAmount,
		}));
	};

	// Function to handle amount percentage
	const handleAmountPercentage = (value) => {
		setAmountPercentage({ amountPercentage: Math.min(Math.max(value, 0), 100) });
	};

	return (
		<div>
			{discountType === 'Percentage' && (
				<div className='w-[24rem] pt-[1rem]'>
					<InputRow
						label={t('Percentage')}
						leftIcon={<AiOutlinePercentage />}
						type='number'
						value={amountPercentage} // Use amountPercentage from state
						onChange={(e) => handleAmountPercentage(Number(e.target.value))}
					/>
				</div>
			)}
			{discountType === 'Fixed amount' && (
				<div className='w-[24rem] pt-[1rem]'>
					<InputRow
						ref={discount}
						label={t('Fixed amount')}
						id='fixedAmount'
						type='number'
						value={fixedAmount}
						onChange={handleChange}
					/>
				</div>
			)}
		</div>
	);
};

export default DiscountTypesOptions;
