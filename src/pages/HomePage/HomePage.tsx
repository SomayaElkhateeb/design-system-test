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
import { LineChart } from 'src/app/components/optimized';
import { CustomSlider } from 'src/app/components/optimized/UiKits/CustomSlider';
import CalloutCard from 'src/app/components/optimized/Cards/CalloutCard';

const slides = [
	{
		videoUrl: 'https://www.youtube.com/embed/pUb9EW770d0?si=JMDd8iQlC39CoyXa',
		title: 'How to finish steps',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: 'https://www.youtube.com/embed/pUb9EW770d0?si=JMDd8iQlC39CoyXa',
		title: 'How to register domain',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: 'https://www.youtube.com/embed/pUb9EW770d0?si=JMDd8iQlC39CoyXa',
		title: 'SEO in details',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: 'https://www.youtube.com/embed/pUb9EW770d0?si=JMDd8iQlC39CoyXa',
		title: 'How to finish steps',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: 'https://www.youtube.com/embed/pUb9EW770d0?si=JMDd8iQlC39CoyXa',
		title: 'How to finish steps',
		description: 'In 2 mins, learn how to launch your store',
	},
];

export default function HomePage() {
	const { screenSize, showLoading } = useHomePage();
	const [isSetup, setIsSetup] = useState(false);
	const [run, setRun] = useState(true);
	const startTour = () => {
		setRun(true);
	};
	const handleSetup = () => {
		setIsSetup(true);
	};

	if (showLoading) {
		return <HomeLoading />;
	}

	return (
		<div className='container grid grid-cols-1 gap-5 p-5'>
			<div className='grid grid-cols-3 col-span-1 gap-5'>
				<div className='col-span-3 xl:col-span-2 h-full'>
					{isSetup ? (
						<LineChart percentage='50' />
					) : (
						<Setups startTour={startTour} handleSetup={handleSetup} />
					)}
				</div>
				<div className='col-span-3 xl:col-span-1'>
					<HomeReports />
				</div>
			</div>
			<div className='grid grid-cols-3 col-span-1 gap-5'>
				<div className='col-span-3 xl:col-span-2'>
					<OrdersCard latestOrders={data.latestOrders} title='Latest Orders' dropdown />
				</div>
				<div className='col-span-3 xl:col-span-1'>
					<ProductHighlights data={data} />
				</div>
			</div>
			<CustomSlider
				slides={slides}
				title='Get started with dookan'
				SlideComponent={CalloutCard}
			/>
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
