import { useTranslation } from 'react-i18next';
import SpecificCustomers from '../../../Selectors/SpecificCustomers';
import SpecificGroups from '../../../Selectors/SpecificGroups';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';

const CustomerSegmentOptions = ({
	segmentOptions,
	formStore,
}: {
	segmentOptions: string;
	formStore: UseFormReturn<newDiscountInterface>;
}) => {
	const { t } = useTranslation();
	return (
		<div>
			{segmentOptions === t('Specific customer groups') && <SpecificGroups formStore={formStore} />}
			{segmentOptions === t('Specific customers') && <SpecificCustomers formStore={formStore} />}
		</div>
	);
};

export default CustomerSegmentOptions;
