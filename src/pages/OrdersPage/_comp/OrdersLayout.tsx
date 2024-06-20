import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const OrdersLayout = () => {
	const tabs = [
		{
			name: `All Orders ${50}`,
			path: 'AllOrders',
		},
		{
			name: `New ${50}`,
			path: 'new',
		},
		{
			name: `Processing ${50}`,
			path: 'processing',
		},
		{
			name: `Ready ${50}`,
			path: 'ready',
		},
		{
			name: `Shipping ${50}`,
			path: 'shipping',
		},
		{
			name: `Delivered ${50}`,
			path: 'delivered',
		},
		{
			name: `Returned ${50}`,
			path: 'returned',
		},
		{
			name: `Cancelled ${50}`,
			path: 'cancelled',
		},
	];
	return (
		<div className='flex-col-global'>
			<div className='Sticky_header'>
				<HorizontalTabsLink tabs={tabs} path='/orders' />
			</div>
			<Outlet />
		</div>
	);
};

export default OrdersLayout;
