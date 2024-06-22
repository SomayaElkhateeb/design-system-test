import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from 'src/pages/MarketingPage/tabs/Discounts/NewDiscount/HookForNewDiscount';
import SpecificAutoCompleteInput from '../../../ui/SpecificAutoCompleteInput';

const SpecificCustomers = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();

	return (
		<SpecificAutoCompleteInput<newDiscountInterface>
			name='specificCustomer'
			label={t('Select customers')}
			formStore={formStore}
		/>
	);
};

export default SpecificCustomers;
