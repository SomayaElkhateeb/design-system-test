import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';

// icons
import { IoIosAddCircle } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { ArrangeIcon, FilterIcon } from 'src/app/utils/icons';
import Table from 'src/app/components/page/discount/Table/Table';
import BodyTable from 'src/app/components/page/discount/Table/BodyTable';
import HeaderTable from 'src/app/components/page/discount/Table/HeaderTable';
import Header from 'src/app/components/page/discount/Table/Header';
import Body from 'src/app/components/page/discount/Table/Body';
import { headerData } from './AddCoupon/comp/data';
const Coupons: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<div>
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
			<Table>
				{/* <HeaderTable>
					<Header headerData={headerData} />
				</HeaderTable>
				<BodyTable>
					<Body />
				</BodyTable> */}
			</Table>
		</>
	);
};

export default Coupons;
