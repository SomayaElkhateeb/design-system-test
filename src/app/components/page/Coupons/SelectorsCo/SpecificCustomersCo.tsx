import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';
import SpecificAutoCompleteInput from '../../discount/Selectors/SpecificAutoCompleteInput';

const SpecificCustomersCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<SpecificAutoCompleteInput<addCouponInterface>
				name='specificCustomer'
				label={t('Select Customers')}
				formStore={formStore}
			/>
		</div>
	);
};

export default SpecificCustomersCo;
