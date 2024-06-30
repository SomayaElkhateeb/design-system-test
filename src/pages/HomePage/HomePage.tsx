import Joyride from 'react-joyride';
import { LineChart } from 'src/app/components/optimized';
import CalloutCard from 'src/app/components/optimized/Cards/CalloutCard';
import OrdersCard from 'src/app/components/optimized/Cards/OrderCard/OrdersCard';
import { HomeLoading } from 'src/app/components/optimized/SchimmerLoading/HomeLoading';
import { CustomSlider } from 'src/app/components/optimized/UiKits/CustomSlider';
import { TourCard } from 'src/app/components/shared';
import { joyrideStyles, tourSteps } from 'src/app/components/shared/tour-guide/tourSteps';
import HomeReports from './_comp/HomeReports';
import ProductHighlights from './_comp/ProductHighlights';
import Setups from './_comp/Setups';
import data from './_comp/data.json';
import { useHomePage } from './_comp/useHomePage';
import { ChooseEmail } from '..';

// --------------------------------------------------------------------------
// import { lazy, Suspense } from 'react';

// const Joyride = lazy(() => import('react-joyride'));
// const LineChart = lazy(() =>
// 	import('src/app/components/optimized').then((module) => ({ default: module.LineChart })),
// );
// const CalloutCard = lazy(() => import('src/app/components/optimized/Cards/CalloutCard'));
// const OrdersCard = lazy(() => import('src/app/components/optimized/Cards/OrderCard/OrdersCard'));
// const HomeLoading = lazy(() =>
// 	import('src/app/components/optimized/SchimmerLoading/HomeLoading').then((module) => ({
// 		default: module.HomeLoading,
// 	})),
// );
// const CustomSlider = lazy(() =>
// 	import('src/app/components/optimized/UiKits/CustomSlider').then((module) => ({
// 		default: module.CustomSlider,
// 	})),
// );
// const TourCard = lazy(() =>
// 	import('src/app/components/shared').then((module) => ({ default: module.TourCard })),
// );
// const HomeReports = lazy(() => import('./_comp/HomeReports'));
// const ProductHighlights = lazy(() => import('./_comp/ProductHighlights'));
// const Setups = lazy(() => import('./_comp/Setups'));

// // Non-component imports
// import { joyrideStyles, tourSteps } from 'src/app/components/shared/tour-guide/tourSteps';
// import data from './_comp/data.json';
// import { useHomePage } from './_comp/useHomePage';
// --------------------------------------------------------------------------

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
	const { showLoading, startTour, handleSetup, handleJoyrideCallback, run, isSetup } =
		useHomePage();

	if (showLoading) {
		return <HomeLoading />;
	}
	// <Suspense fallback={<HomeLoading />}>
	return <ChooseEmail />;
	return (
		<div className='custom_container grid grid-cols-1 gap-5 pt-5'>
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

			<CustomSlider slides={slides} title='Get started with dookan' SlideComponent={CalloutCard} />

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
// </Suspense>
