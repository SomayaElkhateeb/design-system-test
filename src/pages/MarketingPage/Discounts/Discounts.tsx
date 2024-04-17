import React, { useEffect, useState } from 'react';
import { ArrangeIcon, FilterIcon } from 'src/app/utils/icons';
import { IoIosAddCircle } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import { Body, BodyTable, Header, HeaderTable, Table } from 'src/app/components/page';
import { headerData } from './NewDiscount/comp/data';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
import LinearDeterminate from 'src/app/components/optimized/UiKits/LinearDeterminate';
import FilterButton from 'src/app/components/page/Customers/FilterButton';
import { useTranslation } from 'react-i18next';
import TopSectionDiscountAndCoupons from 'src/app/components/page/discount/TopSectionDiscountAndCoupons';

const Discounts: React.FC = () => {
	//  hooks
	const { t } = useTranslation();
	
	const dispatch = useDispatch();

	//  selectors
	const { isLoading, discount } = useSelector((state) => state.discount);

	//  call api to get discounts
	useEffect(() => {
		dispatch(getDiscounts());
	}, [dispatch]);

	

	

	

	return (
		<div className=' container mx-auto my-[0.8rem]'>
			<div className=' flex flex-col '>
				{/*  top section */}
				<TopSectionDiscountAndCoupons addButton={t('add new discount')} path='addDiscount' />
			</div>
		</div>
	);
};

export default Discounts;
