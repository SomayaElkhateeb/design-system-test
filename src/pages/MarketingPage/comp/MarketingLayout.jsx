import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const MarketingLayout = () => {
<<<<<<< HEAD
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
      <div className="sticky top-[70px] z-50">
        <HorizontalTabsLink tabs={tabs} path="/marketing" />
      </div>
      <Outlet />
    </div>
  );
=======
	const tabs = ['apps', 'discounts', 'coupons', 'campaigns'];

	return (
		<div>
			<div className='sticky top-[70px] z-40'>
				<HorizontalTabsLink tabs={tabs} path='/marketing' />
			</div>
			<Outlet />
		</div>
	);
>>>>>>> master
};

export default MarketingLayout;
