import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

export default function AppsLayout() {
	const tabs = [
		{
			name: 'App Store',
			path: 'app_store',
		},
		{
			name: 'Installed apps',
			path: 'installed_apps',
		},
	];

	return (
		<div className='flex-col-top-section-pages'>
			<div className='sticky top-[70px] z-10 '>
				<HorizontalTabsLink tabs={tabs} path='/apps' />
			</div>
			<div className='page-container'>
				<Outlet />
			</div>
		</div>
	);
}
