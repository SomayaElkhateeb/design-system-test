import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import { useTranslation } from 'react-i18next';
import TopSectionDiscountAndCoupons from 'src/app/components/page/discount/TopSectionDiscountAndCoupons';
import DiscountsTable from 'src/app/components/page/discount/Table/DiscountsTable';
import DiscountAndCouponLoading from 'src/app/components/page/SchimmerLoading/DiscountAndCouponLoading';

const Discounts: React.FC = () => {
	const [showLoading, setShowLoading] = useState(true);
	//  hooks
	const { t } = useTranslation();
	const dispatch = useDispatch();

	//  selectors
	const { isLoading, discounts } = useSelector((state) => state.discount);

	//  call api to get discounts
	useEffect(() => {
		dispatch(getDiscounts());
	}, [dispatch]);

	// loading page
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		return () => clearTimeout(timer); // Clear the timer on component unmount
	}, []);
	return (
		<div className='mx-auto container'>
			<div className=' flex flex-col '>
				{/*  top section */}
				<TopSectionDiscountAndCoupons addButton={t('add new discount')} path='addDiscount' />

				{/*  table section */}
				<DiscountsTable discounts={discounts} isLoading={isLoading} />
			</div>
		</div>
	);
};

export default Discounts;
