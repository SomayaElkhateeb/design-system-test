import { useTranslation } from 'react-i18next';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { DiscountsTable, TopSectionDiscountAndCoupons } from 'src/app/components/page';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import MarketingTableMobile from '../comp/MarketingTableMobile';

const discounts = [
	{
		discountName: 'Ramadan campaign',
		isActive: true,
		amount: '- SAR 20.00',
	},
	{
		discountName: 'Summer campaign',
		isActive: false,
		amount: '- SAR 15.00',
	},
];
const formattedDiscounts = discounts.map(({ discountName, ...rest }) => ({
	name: discountName,
	...rest,
}));
const Discounts = () => {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	return (
		<div className='custom_container '>
			<div className='flex-col-top-section-pages'>
				<TopSectionDiscountAndCoupons addButton={t('add new discount')} path='addDiscount' />
				{/* <DiscountsTable discounts={} isLoading={} /> */}
				{xs && (
					<>
						<AddButtonMobile path='addDiscount' />
						<MarketingTableMobile items={formattedDiscounts} />
					</>
				)}
			</div>
		</div>
	);
};

export default Discounts;
