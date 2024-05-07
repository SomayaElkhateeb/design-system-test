import React, { useEffect, useState } from 'react';
// get coupons
import { useDispatch, useSelector } from 'react-redux';
import {
	getCoupons,
	deleteCoupons,
} from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { useTranslation } from 'react-i18next';
import TopSectionDiscountAndCoupons from 'src/app/components/page/discount/TopSectionDiscountAndCoupons';
import CouponsTable from 'src/app/components/page/Coupons/CouponsTable';
import DiscountAndCouponLoading from 'src/app/components/page/SchimmerLoading/DiscountAndCouponLoading';

const Coupons: React.FC = () => {
	//  hooks
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [showLoading, setShowLoading] = useState(true);
	//  selectors
	const { isLoading, coupons, error } = useSelector((state) => state.coupons);

	//  call api to get coupons
	useEffect(() => {
		dispatch(getCoupons());
	}, [dispatch]);
	// loading page
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		return () => clearTimeout(timer); // Clear the timer on component unmount
	}, []);
	return (
		<>
			{showLoading ? (
				<DiscountAndCouponLoading />
			) : (
				<div className=' px-5 mx-auto my-[0.8rem]'>
					<div className=' flex flex-col '>
						{/*  top section */}
						<TopSectionDiscountAndCoupons addButton={t('add new coupon')} path='addCoupon' />

						{/*  table section */}
						<CouponsTable coupons={coupons} isLoading={isLoading} />
					</div>
				</div>
			)}
		</>
	);
};

export default Coupons;
