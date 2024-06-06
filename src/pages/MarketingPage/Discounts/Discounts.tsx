import { useTranslation } from 'react-i18next';
import { DiscountsTable, TopSectionDiscountAndCoupons } from 'src/app/components/page';

const Discounts = () => {
	//  hooks
	const { t } = useTranslation();

	return (
		<div className='custom_container '>
			<div className='flex-col-top-section-pages'>
				<TopSectionDiscountAndCoupons addButton={t('add new discount')} path='addDiscount' />
				{/* <DiscountsTable discounts={} isLoading={} /> */}
			</div>
		</div>
	);
};

export default Discounts;
