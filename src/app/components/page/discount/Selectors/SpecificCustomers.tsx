import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import SpecificAutoCompleteInput from '../../../ui/SpecificAutoCompleteInput';

const SpecificCustomers = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<SpecificAutoCompleteInput<newDiscountInterface>
				name='specificCustomer'
				label={t('Select Customers')}
				formStore={formStore}
			/>
		</div>
	);
};

export default SpecificCustomers;
