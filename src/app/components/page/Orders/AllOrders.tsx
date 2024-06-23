import useResponsive from 'src/app/utils/hooks/useResponsive';

import AllOrdersTableMobile from './AllOrdersTableMobile';
import AddButtonMobile from '../../optimized/Buttons/AddButtonMobile';
import AllOrdersTable from './AllOrdersTable';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { OrderInterface } from 'src/app/interface/OrderInterface';
import TopSectionOrdersPage from './TopSectionOrdersPage';
import { nanoid } from 'nanoid';
import { LiaTrashAlt } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getAllOrdersPageTable } from 'src/app/store/slices/ordersPage/allOrders/allOrdersAsyncThunks';

//  setting menus for setting button action
const settingMenus = [
	{ id: nanoid(), text: 'Cancel Order', icon: <LiaTrashAlt size='28' className='fill-error' /> },
];

export default function AllOrders() {
	//  hooks
	const { t } = useTranslation();
	const [array, setArray] = useState<string[]>([]);
	const { xs } = useResponsive();
	//redux
	const dispatch = useAppDispatch();
	const { allOrders, isLoading, error } = useAppSelector((state) => state.allOrders);

	useEffect(() => {
		dispatch(getAllOrdersPageTable());
	}, [dispatch]);

	if (error) return <div>Error: {error}</div>;
	//  dumy data
	const orders: OrderInterface[] = [
		{
			id: '#8965742',
			customer_name: 'mohamed Mostafa',
			order_status: 'Shipped',
			date: '24/6/2020',
			location: 'Riyad',
			delivery_status: 'Pickup',
			total: 1000,
			payment_status: 'Canceled',
			payment_name: 'Cash on Delivery',
			branch_name: 'medo',
		},
		{
			id: '#8965741',
			customer_name: 'mohamed Mostafa',
			order_status: 'Shipped',
			date: '24/6/2020',
			location: 'Riyad',
			delivery_status: 'Pickup',
			total: 1000,
			payment_status: 'Awaiting Payment',
			payment_name: 'Cash on Delivery',
			branch_name: 'medo',
		},
		{
			id: '#8965743',
			customer_name: 'mohamed Mostafa',
			order_status: 'Shipped',
			date: '24/6/2020',
			location: 'Riyad',
			delivery_status: 'Pickup',
			total: 1000,
			payment_status: 'Paid',
			payment_name: 'Cash on Delivery',
			branch_name: 'medo',
		},
	];

	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionOrdersPage addButton={t('Add Order')} path='/addOrder' />

				{/*  table section */}

				<AllOrdersTable
					settingMenus={settingMenus}
					array={array}
					setArray={setArray}
					orders={allOrders}
					isLoading={isLoading}
				/>

				{xs && (
					<>
						<AllOrdersTableMobile orders={allOrders} />
						<AddButtonMobile path='/order/addOrder' />
					</>
				)}
			</div>
		</div>
	);
}
