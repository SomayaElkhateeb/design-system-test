import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
// get coupons
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';

// icons
import { IoIosAddCircle } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { ArrangeIcon, FilterIcon } from 'src/app/utils/icons';

import { headerData } from './AddCoupon/comp/data';
import { Body, BodyTable, Header, HeaderTable, Table } from 'src/app/components/page';
const Coupons: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, coupons } = useSelector((state) => state.coupons);

	useEffect(() => {
		dispatch(getCoupons());
	}, [dispatch]);

	return (
		// Render your component with fetched data
		<>
			<div style={{ position: 'sticky', top: 120 }} className='bg-light-1 z-50 mb-3'>
				<div className='h-[70px] flex items-center border-b-2 border-light-2 mx-3'>
					<div className='flex justify-between  w-full'>
						<Button
							variant='primary'
							LeftIcon={IoIosAddCircle}
							onClick={() => {
								navigate('addCoupon');
							}}
						>
							add new coupon
						</Button>
						<div className='flex gap-8'>
							<Button variant='secondary' LeftIcon={ArrangeIcon} RightIcon={FaAngleDown}>
								arrange
							</Button>
							<Button variant='secondary' LeftIcon={FilterIcon}>
								filter
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Table */}
			{isLoading ? (
				<div className='h-screen w-full flex justify-center items-center'>
					<div className='spinner'></div>
				</div>
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
				</div>
			) : (
				<div className='py-2 px-6 my-20 mx-auto w-fit bg-white rounded'>
					<h3 className='text-title font-semibold'>There is no coupons available!</h3>
				</div>
			)}

			{/* Render error message if error exists */}
			{/* {error && toast.error(error)} */}
		</>
	);
};

export default Coupons;
