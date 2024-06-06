import { Outlet, useLocation } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';
import EmailForm from '../EmailForm/EmailForm';

const MarketingLayout = () => {
	//  hooks
	const { pathname } = useLocation();
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

	console.log(pathname);
	return (
		<div className='grid'>
			{!pathname.includes('addDiscount') && !pathname.includes('email-form') && (
				<div className='Sticky_header'>
					<HorizontalTabsLink tabs={tabs} path='/marketing' />
				</div>
			)}
			<Outlet />
		</div>
	);
};

export default MarketingLayout;
