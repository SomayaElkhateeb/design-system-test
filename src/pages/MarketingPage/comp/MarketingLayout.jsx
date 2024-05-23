import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const MarketingLayout = () => {
	const tabs = [
		{
			name: 'Apps',
			path: 'apps',
		},
		{
			name: 'Discounts',
			path: 'discounts',
		},
		{
			name: 'Coupons',
			path: 'coupons',
		},
		{
			name: 'Campaigns',
			path: 'campaigns',
		},
	];

	return (
		<div className='grid'>
			<div className='Sticky_header'>
				<HorizontalTabsLink tabs={tabs} path='/marketing' />
			</div>
			<Outlet />
		</div>
	);
};

export default MarketingLayout;
