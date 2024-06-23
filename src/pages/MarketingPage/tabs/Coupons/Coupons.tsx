import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import TopSectionDiscountAndCoupons from 'src/app/components/page/discount/TopSectionDiscountAndCoupons';
import CouponsTable from 'src/pages/MarketingPage/tabs/Coupons/NewCoupons/CouponsTable';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import MarketingTableMobile from '../../_comp/MarketingTableMobile';
import { useAppDispatch, useAppSelector } from 'src/app/store';

const couponsData = [
	{
		customerName: 'Sam25',
		isActive: true,
		amount: '- SAR 20.00',
	},
	{
		customerName: 'Nem##',
		isActive: false,
		amount: '- SAR 15.00',
	},
];
const formattedCoupons = couponsData.map(({ customerName, ...rest }) => ({
	name: customerName,
	...rest,
}));
const Coupons = () => {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const dispatch = useAppDispatch();
	const { coupons, isLoading, error } = useAppSelector((state) => state.coupons);

	useEffect(() => {
		dispatch(getCoupons());
	}, [dispatch]);

	return (
		<div className='custom_container relative'>
			<div className='flex-col-global  '>
				{/*  top section */}
				<TopSectionDiscountAndCoupons addButton={t('add new coupon')} path='addCoupon' />
				{xs && (
					<>
						<AddButtonMobile path='addCoupon' />
						<MarketingTableMobile items={formattedCoupons} />
					</>
				)}
				{/*  table section */}
				<CouponsTable coupons={coupons} isLoading={isLoading} />
			</div>
		</div>
	);
};

export default Coupons;
