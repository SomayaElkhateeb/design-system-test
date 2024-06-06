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
	return (
		<div>
			{segmentOptions === 'Specific customer groups' && <SpecificGroups formStore={formStore} />}
			{segmentOptions === 'Specific customers' && <SpecificCustomers formStore={formStore} />}
		</div>
	);
};

export default CustomerSegmentOptions;
