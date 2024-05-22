import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { useTranslation } from 'react-i18next';

import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from '../../HookForNewDiscount';
import SpecificProductsX from 'src/app/components/page/discount/Selectors/SpecificProductsX';
import SpecificProductsY from 'src/app/components/page/discount/Selectors/SpecificProductsY';

const BuyXGetY = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();

	const customerGetsOptions = ['Free', '50% offer', 'Specify percentage'];

	const handleApplyTo = (option: string) => {
		formStore.setValue('ProductXToProductYType', option);
	};
	return (
		<div className='flex-col-top-section-pages gap-[1rem]'>
			<div className='flex-col-top-section-pages gap-[.5rem]'>
				<SpecificProductsX formStore={formStore} />
				<div>
					<SingleChoiceChips
						options={customerGetsOptions}
						setSelected={handleApplyTo}
						selected={formStore.watch('ProductXToProductYType') ?? 'free'}
					/>
				</div>
				{formStore.watch('ProductXToProductYType') === 'Specify percentage' && (
					<div className='md:w-[24rem] flex-col-top-section-pages  gap-[.4rem]'>
						<FormField
							formStore={formStore}
							name='percentageGets'
							label={t('Percentage')}
							render={(field) => <Input type='number' {...field} />}
						/>

						<FormField
							formStore={formStore}
							name='quantityGets'
							label={t('quantity')}
							render={(field) => <Input type='number' {...field} />}
						/>
					</div>
				)}
			</div>
			<SpecificProductsY formStore={formStore} />
		</div>
	);
};

export default BuyXGetY;
