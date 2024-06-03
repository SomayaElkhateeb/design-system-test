import Setups from './comp/Setups';
import data from './comp/data.json';
import HomeReports from './comp/HomeReports';
import { useHomePage } from './comp/useHomePage';
import ProductHighlights from './comp/ProductHighlights';
import Slider from 'src/app/components/optimized/UiKits/Slider';
import OrdersCard from 'src/app/components/optimized/Cards/OrderCard/OrdersCard';
import { HomeLoading } from 'src/app/components/page/SchimmerLoading/HomeLoading';

import { useState } from 'react';
import Joyride from 'react-joyride';
import { joyrideStyles, tourSteps } from 'src/app/components/TourGuide/tourSteps';
import TourCard from 'src/app/components/TourGuide/TourCard';
import SidebarMob from 'src/app/components/main/SidebarMob';

export default function HomePage() {
	const { screenSize, showLoading } = useHomePage();
	const [run, setRun] = useState(true);
	const startTour = () => {
		setRun(true);
	};
	if (showLoading) {
		return <HomeLoading />;
	}
	return <SidebarMob />;
	return (
		<div className='custom_container grid grid-cols-1 gap-5 p-5'>
			<div className='custom-grid-parent'>
				<div className='grid-left'>
					<Setups startTour={startTour} />
				</div>
				<div className='grid-right'>
					<HomeReports />
				</div>
			</div>
			<div className='custom-grid-parent'>
				<div className='grid-left'>
					<OrdersCard latestOrders={data.latestOrders} title='Latest Orders' dropdown />
				</div>
				<div className='grid-right'>
					<ProductHighlights data={data} />
				</div>
			</div>
			<div className='global-cards h-fit'>
				<Slider size={screenSize} slides={data.slides} title='Get started with dookan' />
			</div>
			<Joyride
				steps={tourSteps}
				run={run}
				continuous
				styles={joyrideStyles}
				tooltipComponent={TourCard}
				callback={(data) => {
					if (data.status === 'finished' || data.status === 'skipped') {
						setRun(false);
					}
				}}
			/>
		</div>
	);
}
