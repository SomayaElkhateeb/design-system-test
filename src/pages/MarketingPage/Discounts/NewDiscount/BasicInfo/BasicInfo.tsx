import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import ApplyToOptions from './comp/ApplyToOptions';

import { newDiscountInterface } from '../NewDiscount';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import DiscountTypesOptions from 'src/app/components/page/discount/Comp/DiscountTypesOptions';

const BasicInfo = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	const [selectedOptionType, setSelectedOptionType] = useState<string>('');
	const [selectedOptionApply, setSelectedOptionApply] = useState<string>('');

	const applyToOptions = [
		t('All products'),
		t('Specific category'),
		t('Specific products'),
		t('Buy x get y'),
	];

	const discountTypesOptions = [t('Percentage'), t('Fixed amount'), t('Free shipping')];
	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold mb-2'>{t('Basic info')}</h3>
			<div className='flex flex-col gap-[1rem]'>
				<div className='w-[24rem]'>
					<FormField
						formStore={formStore}
						name='name'
						label={t('discount')}
						render={(field) => <Input {...field} />}
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
				<DiscountTypesOptions discountType={selectedOptionType} formStore={formStore} />
			</section>

			<section>
				<h5 className='text-sm text-pri-dark font-semibold pb-2'>{t('Apply to')}</h5>
				<SingleChoiceChips
					options={applyToOptions}
					selected={selectedOptionApply}
					setSelected={(option: string) => setSelectedOptionApply(option)}
				/>
				<ApplyToOptions applyTo={selectedOptionApply} formStore={formStore} />
			</section>
		</div>
	);
};

export default BasicInfo;
