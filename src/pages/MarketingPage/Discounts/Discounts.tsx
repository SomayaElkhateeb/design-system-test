import { useTranslation } from 'react-i18next';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { DiscountsTable, TopSectionDiscountAndCoupons } from 'src/app/components/page';
import useResponsive from 'src/app/utils/hooks/useResponsive';

const Discounts = () => {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	return (
		<div className='custom_container '>
			<div className='flex-col-top-section-pages'>
				<TopSectionDiscountAndCoupons addButton={t('add new discount')} path='addDiscount' />
				{/* <DiscountsTable discounts={} isLoading={} /> */}
				{xs && <AddButtonMobile path='addDiscount' />}
			</div>
		</div>
	);
};

export default Discounts;
