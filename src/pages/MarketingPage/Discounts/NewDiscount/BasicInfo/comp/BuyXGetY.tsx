import React, { useState } from 'react';
import InputRow from 'src/app/components/optimized/InputsFields/InputRow';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { AiOutlinePercentage } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';

const BuyXGetY: React.FC = () => {
	const { t } = useTranslation();
	const [selectedCustomerGets, setSelectedCustomerGets] = useState<string>('');
	const customerGetsOptions = [t('Free'), t('50% offer'), t('Specify percentage')];
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
		<div className='mt-[1rem] flex flex-col gap-[1rem]'>
			<div>
				{/* select product X */}

				<SpecificProducts name={t('select products x')} />
				{/* customer gets */}
				<div>
					<SingleChoiceChips
						options={customerGetsOptions}
						selected={selectedCustomerGets}
						setSelected={(option: string) => setSelectedCustomerGets(option)}
					/>
				</div>
				{selectedCustomerGets === 'Specify percentage' && (
					<div className='w-[24rem]  '>
						<InputRow
							label='Percentage'
							type='number'
							min={0}
							max={100}
							leftIcon={<AiOutlinePercentage />}
							handleOnChange={handleInputChange}
							value={inputState.value}
							error={inputState.error}
							success={inputState.success}
						/>
					</div>
				)}
			</div>

			{/* select product Y */}
			<div className='-mt-[1rem]'>
				<SpecificProducts name={t('select products y')} />
			</div>
		</div>
	);
};

export default BuyXGetY;
