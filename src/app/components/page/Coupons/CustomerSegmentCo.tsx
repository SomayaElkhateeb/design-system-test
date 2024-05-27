import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';
import CustomerSegmentOptionsCo from './CustomerSegmentOptionsCo';

const CustomerSegmentCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
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
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>{t('Customer segment')}</h3>
			<section>
				<SingleChoiceChips
					options={customerSegmentOptions}
					setSelected={handleCustomers}
					selected={formStore.watch('customerSegment')}
				/>

				<CustomerSegmentOptionsCo
					formStore={formStore}
					segmentOptions={formStore.watch('customerSegment')}
				/>
			</section>
		</div>
	);
};

export default CustomerSegmentCo;
