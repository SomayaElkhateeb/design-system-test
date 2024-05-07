import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const OrdersLayout = () => {

	const tabs = [
		{
			name: `All Products ${50}`,
			path: 'all_products',
		},
		{
			name:`New ${50}`,
			path: 'new',
		},
		{
			name:`Processing ${50}`,
			path: 'processing',
		},
		{
			name:`Ready ${50}`,
			path: 'ready',
		},
		{
			name:`Shipping ${50}`,
			path: 'shipping',
		},
		{
			name:`Delivered ${50}`,
			path: 'delivered',
		},
		{
			name:`Returned ${50}`,
			path: 'returned',
		},
		{
			name:`Cancelled ${50}`,
			path: 'cancelled',
		},
	];
	return (
		<div>
			<div className='sticky top-[70px] z-50'>
				<HorizontalTabsLink tabs={tabs} path='/orders' />
			</div>
			<Outlet />
		</div>
	);
};

export default OrdersLayout;
