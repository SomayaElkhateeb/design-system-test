import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/NewDiscount';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';

const DiscountTypesOptions = ({
	discountType,
	formStore,
}: {
	formStore: UseFormReturn<newDiscountInterface>;
	discountType: string;
}) => {
	const { t } = useTranslation();
	return (
		<div>
			{discountType === t('Percentage') && (
				<div className='w-[24rem] pt-[1rem]'>
					<FormField
						formStore={formStore}
						name='percentage'
						label={t('Percentage')}
						render={(field) => <Input {...field} />}
					/>
				</div>
			)}
			{discountType === t('Fixed amount') && (
				<div className='w-[24rem] pt-[1rem]'>
					<FormField
						formStore={formStore}
						name='value'
						label={t('Fixed amount')}
						render={(field) => <Input {...field} />}
					/>
				</div>
			)}
		</div>
	);
};

export default DiscountTypesOptions;
