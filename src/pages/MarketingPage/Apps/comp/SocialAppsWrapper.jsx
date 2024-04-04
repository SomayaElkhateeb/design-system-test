import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppsCard } from 'src/app/components/optimized';

import { NextIcon } from 'src/app/utils/icons';

const SocialAppsWrapper = ({ socialApps, title, linkTo }) => {
	//  hooks
	const { t } = useTranslation();
	const [itemsToRender, setItemsToRender] = useState(3); // Default number of items to render
	useEffect(() => {
		// Function to calculate number of items to render based on screen width
		const calculateItemsToRender = () => {
			// Get the width of the screen
			const screenWidth = window.innerWidth;

			// Set the number of items to render based on screen width
			if (screenWidth <= 640) {
				setItemsToRender(1); // Render 1 item for small screens (e.g., mobile)
			} else if (screenWidth < 1024) {
				setItemsToRender(2); // Render 2 items for medium screens (e.g., tablets)
			} else if (screenWidth < 1536) {
				setItemsToRender(3); // Render 2 items for medium screens (e.g., tablets)
			} else {
				setItemsToRender(4); // Render 3 items for large screens (e.g., desktops)
			}
		};
		// Calculate number of items to render on initial render and when window is resized
		calculateItemsToRender();
		window.addEventListener('resize', calculateItemsToRender);

		return () => {
			window.removeEventListener('resize', calculateItemsToRender);
		};
	}, []);

	return (
		<div>
			<div className='flex justify-between mb-5'>
				<h2 className='text-lg font-semibold text-title'>{t(title)}</h2>
				<Link to={linkTo} className='flex items-center'>
					<p className='text-sm font-semibold text-title'>View All</p>
					<NextIcon className='fill-pri-dark' />
				</Link>
			</div>
			<div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{socialApps?.map((app) => (
					<div key={app.id} className='col-span-1'>
						<AppsCard {...app} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SocialAppsWrapper;
