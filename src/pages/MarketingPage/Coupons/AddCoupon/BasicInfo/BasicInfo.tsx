import React, { useState } from 'react';
import { InputRow } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import DiscountTypesOptions from './comp/DiscountTypesOptions';
import ApplyToOptions from './comp/ApplyToOptions';
import { useTranslation } from 'react-i18next';

const BasicInfo: React.FC = ({ discountName, fixedAmount, setState }) => {
	const { t } = useTranslation();
	const [selectedOptionType, setSelectedOptionType] = useState<string>('');
	const [selectedOptionApply, setSelectedOptionApply] = useState<string>('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...discountName,
			discountName: e.target.value,
		});
	};
	const applyToOptions = [t('All products'), t('Specific category'), t('Specific products')].map((option) => option);

	const discountTypesOptions = [t('Percentage'), t('Fixed amount'), t('Free shipping')].map((option) => option);
	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold mb-2'>{t('Basic info')}</h3>
			<div className='flex flex-col gap-[1rem]'>
				<div className='w-[24rem]'>
					<InputRow label={t('coupon code')} value={discountName} onChange={handleChange} />
				</div>
			</div>

			<section>
				<h5 className='text-sm text-pri-dark font-semibold mb-2'>{t('Discount Type')}</h5>
				<SingleChoiceChips
					options={discountTypesOptions}
					selected={selectedOptionType}
					setSelected={(option: string) => setSelectedOptionType(option)}
				/>

				<DiscountTypesOptions discountType={selectedOptionType} fixedAmount={fixedAmount} setState={setState} />
			</section>

			<section>
				<h5 className='text-sm text-pri-dark font-semibold pb-2'>{t('Apply to')}</h5>
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
