import { useTranslation } from 'react-i18next';
import { newDiscountInterface } from 'src/pages/MarketingPage/tabs/Discounts/NewDiscount/HookForNewDiscount';
import { UseFormReturn } from 'react-hook-form';
import SpecificAutoCompleteInput from '../../../ui/SpecificAutoCompleteInput';

const SpecificGroups = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	return (
		
			<SpecificAutoCompleteInput<newDiscountInterface>
				name='specificCustomerGroup'
				label={t('Select Customer Group')}
				formStore={formStore}
			/>
	
	);
};

export default SpecificGroups;
