import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import CustomerSegmentOptions from './comp/CustomerSegmentOptions';
import { useTranslation } from 'react-i18next';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import { UseFormReturn } from 'react-hook-form';

const CustomerSegment = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();

	const customerSegmentOptions = [
		t('All customers'),
		t('Specific customer groups'),
		t('Specific customers'),
	];

	const handleCustomers = (option: string) => {
		formStore.setValue('customerSegment', option);
	};

	return (
		<div className='global-cards'>
			<h3 className='text-title font-semibold'>{t('Customer segment')}</h3>
			<section>
				<SingleChoiceChips
					options={customerSegmentOptions}
					setSelected={handleCustomers}
					selected={formStore.watch('customerSegment')}
				/>

				<CustomerSegmentOptions
					formStore={formStore}
					segmentOptions={formStore.watch('customerSegment')}
				/>
			</section>
		</div>
	);
};

export default CustomerSegment;
