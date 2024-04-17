import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
// get coupons
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';

// icons
import { IoIosAddCircle } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { headerData } from './AddCoupon/comp/data';
import { Body, BodyTable, Header, HeaderTable, Table } from 'src/app/components/page';
import { ToastContainer, toast } from 'react-toastify';
import LinearDeterminate from 'src/app/components/optimized/UiKits/LinearDeterminate';
import FilterButton from 'src/app/components/page/Customers/FilterButton';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
// import BaseTable from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
const Coupons: React.FC = () => {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('');
	// hooks
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { isLoading, coupons, error } = useSelector((state) => state.coupons);

	useEffect(() => {
		dispatch(getCoupons());
	}, [dispatch]);

	if (error) {
		toast.error(error);
	}

	const sortMenus = [
		{ id: '1', text: 'Name A to Z' },
		{ id: '2', text: 'Name Z to A' },
		// Add more sorting options as needed
	];

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	return (
		// Render your component with fetched data
		<>
			<div style={{ position: 'sticky', top: 120 }} className='bg-light-1 z-50 mb-3'>
				<div className='h-[70px] flex items-center border-b-2 border-light-2 mx-3'>
					<div className='flex justify-between w-full items-center'>
						<Button
							LeftIcon={IoIosAddCircle}
							onClick={() => {
								navigate('addCoupon');
							}}
						>
							{t('add new coupon')}
						</Button>
						<div className='flex gap-8'>
							<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
							<FilterButton />
						</div>
					</div>
				</div>
			</div>

			{/* Table */}
			{isLoading ? (
				<LinearDeterminate />
			) : error ? (
				<ToastContainer position='top-right' />
			) : coupons.length > 0 ? (
				<div className='mx-3'>
					<Table>
						<HeaderTable>
							<Header headerData={headerData} />
						</HeaderTable>
						<BodyTable>
							<Body bodyData={coupons} />
						</BodyTable>
					</Table>
					{/* <BaseTable headers={headerData} rows={coupons} /> */}
				</div>
			) : (
				<div className='py-2 px-6 my-20 mx-auto w-fit bg-white rounded'>
					<h3 className='text-title font-semibold'>There are no coupons available!</h3>
				</div>
			)}
		</>
	);
};

export default Coupons;
