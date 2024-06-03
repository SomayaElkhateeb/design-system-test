import Joyride from 'react-joyride';

import Setups from './comp/Setups';
import data from './comp/data.json';
import HomeReports from './comp/HomeReports';
import { useHomePage } from './comp/useHomePage';
import ProductHighlights from './comp/ProductHighlights';
import { LineChart } from 'src/app/components/optimized';
import TourCard from 'src/app/components/TourGuide/TourCard';
import CalloutCard from 'src/app/components/optimized/Cards/CalloutCard';
import { CustomSlider } from 'src/app/components/optimized/UiKits/CustomSlider';
import OrdersCard from 'src/app/components/optimized/Cards/OrderCard/OrdersCard';
import { HomeLoading } from 'src/app/components/page/SchimmerLoading/HomeLoading';
import { joyrideStyles, tourSteps } from 'src/app/components/TourGuide/tourSteps';

export default function HomePage() {
	const { showLoading, startTour, handleSetup, handleJoyrideCallback, run, isSetup } =
		useHomePage();

	if (showLoading) {
		return <HomeLoading />;
	}

	return (
		<div className='custom_container grid grid-cols-1 gap-5 p-5'>
			<div className='custom-grid-parent'>
				<div className='grid-left'>
					{isSetup ? (
						<LineChart percentage='50' />
					) : (
						<Setups startTour={startTour} handleSetup={handleSetup} />
					)}
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
			<CustomSlider
				slides={data.slides}
				title='Get started with dookan'
				SlideComponent={CalloutCard}
			/>
			<Joyride
				steps={tourSteps}
				run={run}
				continuous
				styles={joyrideStyles}
				tooltipComponent={TourCard}
				callback={handleJoyrideCallback}
			/>
		</div>
	);
}
