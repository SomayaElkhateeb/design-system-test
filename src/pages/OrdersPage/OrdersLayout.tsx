import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const OrdersLayout = () => {
	const tabs = [
		`AllOrders${50}`,
		`New${50}`,
		`Processing${50}`,
		`Ready${50}`,
		`Shipping${50}`,
		`Delivered${50}`,
		`Returned${50}`,
		`Cancelled${50}`,
	];

	return (
		<div>
			<div className='sticky top-[70px] z-10'>
				<HorizontalTabsLink tabs={tabs} path='/orders' />
			</div>
			<Outlet />
		</div>
	);
};

export default OrdersLayout;
