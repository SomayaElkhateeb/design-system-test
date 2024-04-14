import React, { useEffect } from 'react';
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

const Discounts: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, discount } = useSelector((state) => state.discount);

	useEffect(() => {
		dispatch(getDiscounts());
	}, [dispatch]);

	console.log('discount', discount);
	return (
		<>
			<div className='h-[70px] flex items-center border-b-2 border-light-2 mx-3'>
				<div className='flex justify-between w-full'>
					<Button
						LeftIcon={IoIosAddCircle}
						onClick={() => {
							navigate('addDiscount');
						}}
					>
						add new discount
					</Button>

					<div className='flex gap-8'>
						{/* <Button variant='secondary' LeftIcon={ArrangeIcon} RightIcon={FaAngleDown}>
							arrange
						</Button> */}
						<ArrangeButton />
						<Button variant='secondary' LeftIcon={FilterIcon}>
							filter
						</Button>
					</div>
				</div>
			</div>

			{/* Table */}
			{isLoading ? (
				<div className='h-screen w-full flex justify-center items-center'>
					<div className='spinner'></div>
				</div>
			) : discount.length > 0 ? (
				<div className='mx-3'>
					<Table>
						<HeaderTable>
							<Header headerData={headerData} />
						</HeaderTable>
						<BodyTable>
							<Body bodyData={discount} />
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

export default Discounts;
