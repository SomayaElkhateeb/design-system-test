import { DiscountFormStore } from 'src/pages/MarketingPage/Discounts/NewDiscount/NewDiscount';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { useTranslation } from 'react-i18next';

const DiscountTypesOptions = ({
	discountType,
	formStore,
}: {
	formStore: DiscountFormStore;
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
						render={(field) => {
							return <Input {...field} type='number' />;
						}}
					/>
				</div>
			)}
			{discountType === t('Fixed amount') && (
				<div className='w-[24rem] pt-[1rem]'>
					<FormField
						formStore={formStore}
						name='fixedAmount'
						label={t('Fixed amount')}
						render={(field) => {
							return <Input {...field} type='number' />;
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default DiscountTypesOptions;
