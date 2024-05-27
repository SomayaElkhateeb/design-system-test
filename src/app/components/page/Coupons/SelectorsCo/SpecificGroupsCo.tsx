import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';
import SpecificAutoCompleteInput from '../../discount/Selectors/SpecificAutoCompleteInput';

const SpecificGroupCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<SpecificAutoCompleteInput<addCouponInterface>
				name='specificCustomerGroup'
				label={t('Select Customer Group')}
				formStore={formStore}
			/>
		</div>
	);
};

export default SpecificGroupCo;
