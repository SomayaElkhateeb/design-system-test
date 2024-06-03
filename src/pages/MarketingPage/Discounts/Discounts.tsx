import { useTranslation } from 'react-i18next';
import { DiscountsTable, TopSectionDiscountAndCoupons } from 'src/app/components/page';

const Discounts = () => {
	//  hooks
	const { t } = useTranslation();

	return (
		<div className='custom_container py-5'>
			<div className='flex flex-col'>
				<TopSectionDiscountAndCoupons addButton={t('add new discount')} path='addDiscount' />
				{/* <DiscountsTable discounts={} isLoading={} /> */}
			</div>
		</div>
	);
};

export default Discounts;
