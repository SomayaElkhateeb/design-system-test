import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import ApplyToOptions from './comp/ApplyToOptions';
import DiscountTypesOptions from 'src/app/components/page/discount/Comp/DiscountTypesOptions';
import InputRow from 'src/app/components/optimized/InputsFields/InputRow';

const BasicInfo: React.FC<{}> = ({}) => {
	const { t } = useTranslation();
	const [selectedOptionType, setSelectedOptionType] = useState<string>('');
	const [selectedOptionApply, setSelectedOptionApply] = useState<string>('');

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

	/////////////////////////
	const applyToOptions = [t('All products'), t('Specific category'), t('Specific products'), t('Buy x get y')];

	const discountTypesOptions = [t('Percentage'), t('Fixed amount'), t('Free shipping')];
	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold mb-2'>{t('Basic info')}</h3>
			<div className='flex flex-col gap-[1rem]'>
				<div className='w-[24rem]'>
					<InputRow
						label='discount'
						handleOnChange={handleInputChange}
						value={inputState.value}
						error={inputState.error}
						success={inputState.success}
					/>
				</div>
			</div>

			<section>
				<h5 className='text-sm text-pri-dark font-semibold mb-2'>{t('Discount Type')}</h5>
				<SingleChoiceChips
					options={discountTypesOptions}
					selected={selectedOptionType}
					setSelected={(option: string) => setSelectedOptionType(option)}
				/>

				<DiscountTypesOptions discountType={selectedOptionType} />
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
