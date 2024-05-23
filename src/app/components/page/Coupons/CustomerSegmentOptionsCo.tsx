import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';
import { SpecificCustomersCo, SpecificGroupCo } from '..';

const CustomerSegmentOptionsCo = ({
	segmentOptions,
	formStore,
}: {
	segmentOptions: string;
	formStore: UseFormReturn<addCouponInterface>;
}) => {
	const { t } = useTranslation();
	return (
		<div>
			{segmentOptions === t('Specific customer groups') && (
				<SpecificCustomersCo formStore={formStore} />
			)}
			{segmentOptions === t('Specific customers') && <SpecificGroupCo formStore={formStore} />}
		</div>
	);
};

export default CustomerSegmentOptionsCo;
