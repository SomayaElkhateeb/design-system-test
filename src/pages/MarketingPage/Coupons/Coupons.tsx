import React, { useEffect } from 'react';
// get coupons
import { useDispatch, useSelector } from 'react-redux';
import {
	getCoupons,
	deleteCoupons,
} from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { useTranslation } from 'react-i18next';
import TopSectionDiscountAndCoupons from 'src/app/components/page/discount/TopSectionDiscountAndCoupons';
import CouponsTable from 'src/app/components/page/Coupons/CouponsTable';

const Coupons: React.FC = () => {
	//  hooks
	const { t } = useTranslation();
	const dispatch = useDispatch();

	//  selectors
	const { isLoading, coupons, error } = useSelector((state) => state.coupons);

	//  call api to get coupons
	useEffect(() => {
		dispatch(getCoupons());
	}, [dispatch]);

	return (
		<div className=' p-5 mx-auto my-[0.8rem]'>
			<div className=' flex flex-col '>
				{/*  top section */}
				<TopSectionDiscountAndCoupons addButton={t('add new coupon')} path='addCoupon' />

				{/*  table section */}
				<CouponsTable coupons={coupons} isLoading={isLoading} />
			</div>
		</div>
	);
};

export default Coupons;
