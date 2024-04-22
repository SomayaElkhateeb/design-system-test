import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import { useTranslation } from 'react-i18next';
import TopSectionDiscountAndCoupons from 'src/app/components/page/discount/TopSectionDiscountAndCoupons';
import DiscountsTable from 'src/app/components/page/discount/Table/DiscountsTable';

const Discounts: React.FC = () => {
	//  hooks
	const { t } = useTranslation();
	const dispatch = useDispatch();

	//  selectors
	const { isLoading, discounts } = useSelector((state) => state.discount);

	//  call api to get discounts
	useEffect(() => {
		dispatch(getDiscounts());
	}, [dispatch]);

	return (
		<div className='mx-auto my-[0.8rem] p-5'>
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
