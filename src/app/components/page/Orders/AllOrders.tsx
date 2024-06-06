import { nanoid } from 'nanoid';
import { useState } from 'react';

import TopSectionOrdersPage from './TopSectionOrdersPage';
import { useTranslation } from 'react-i18next';
import { OrderInterface } from 'src/app/interface/OrderInterface';
import OrdersTable from './OrdersTable';
import { RemoveIcon } from 'src/app/utils/icons';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import OrdersTableMobile from './AllOrdersTableMobile';
import AllOrdersTableMobile from './AllOrdersTableMobile';

//  setting menus for setting button action
const settingMenus = [
	{ id: nanoid(), text: 'Cancel Order', icon: <RemoveIcon className='fill-error' /> },
];

export default function AllOrders() {
	//  hooks
	const { t } = useTranslation();
	const [array, setArray] = useState<string[]>([]);
	const { xs } = useResponsive();
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
			<div className='flex-col-top-section-pages'>
				{/*  top section */}
				<TopSectionOrdersPage addButton={t('Add Order')} path='/addOrder' />

				{/*  table section */}

				<OrdersTable
					settingMenus={settingMenus}
					array={array}
					setArray={setArray}
					orders={orders}
				/>
				{xs && <AllOrdersTableMobile orders={orders} />}
			</div>
		</div>
	);
}
