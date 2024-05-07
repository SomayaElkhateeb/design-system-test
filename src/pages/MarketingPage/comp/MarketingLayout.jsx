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
		<div>
			<div className='sticky top-[70px] z-10'>
				<HorizontalTabsLink tabs={tabs} path='/marketing' />
			</div>
			<Outlet />
		</div>
	);

};

export default MarketingLayout;
