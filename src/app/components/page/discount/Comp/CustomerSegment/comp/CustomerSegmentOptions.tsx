import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import { SpecificGroups, SpecificCustomers } from 'src/app/components/page';

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
