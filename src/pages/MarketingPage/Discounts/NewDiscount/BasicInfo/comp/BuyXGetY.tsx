import { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { useTranslation } from 'react-i18next';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';

import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from '../../NewDiscount';

const BuyXGetY = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	const [selectedCustomerGets, setSelectedCustomerGets] = useState<string>('');
	const customerGetsOptions = [t('Free'), t('50% offer'), t('Specify percentage')];

	return (
		<div className='mt-[1rem] flex flex-col gap-[1rem]'>
			<div>
				<SpecificProducts name={t('select products x')} />
				<div>
					<SingleChoiceChips
						options={customerGetsOptions}
						selected={selectedCustomerGets}
						setSelected={(option: string) => setSelectedCustomerGets(option)}
					/>
				</div>
				{selectedCustomerGets === 'Specify percentage' && (
					<div className='w-[24rem]  '>
						<FormField
							formStore={formStore}
							name='percentageGets'
							label={t('Percentage')}
							render={(field) => <Input {...field} />}
						/>
					</div>
				)}
			</div>
			<div className='-mt-[1rem]'>
				<SpecificProducts name={t('select products y')} />
			</div>
		</div>
	);
};

export default BuyXGetY;
