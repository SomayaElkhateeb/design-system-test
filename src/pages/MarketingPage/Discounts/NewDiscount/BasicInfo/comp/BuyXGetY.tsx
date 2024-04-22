import { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { useTranslation } from 'react-i18next';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';
import { DiscountFormStore } from '../../NewDiscount';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

const BuyXGetY = ({ formStore }: { formStore: DiscountFormStore }) => {
	const { t } = useTranslation();
	const [selectedCustomerGets, setSelectedCustomerGets] = useState<string>('');
	const customerGetsOptions = [t('Free'), t('50% offer'), t('Specify percentage')];

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
						<FormField
							formStore={formStore}
							name='percentageGets'
							label={t('Percentage')}
							render={(field) => {
								return <Input {...field} type='number' />;
							}}
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
