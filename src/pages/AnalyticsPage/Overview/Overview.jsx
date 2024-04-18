import SlideCardTabs from 'src/app/components/page/Cards/SlideCardTabs';
import { ChannelChart, LineChart } from 'src/app/components/optimized';

import SlideCard from 'src/app/components/page/Cards/SlideCard';
import AnalyticsComparison from './comp/AnalyticsComparison';
import Orders from 'src/app/components/page/Cards/Orders';
import data from '../comp/data.json';
import StatsCard from 'src/app/components/optimized/Cards/StatsCard';
// const ParentComponent = () => {
const slides = [
	{ content: <div> 123 </div> },
	{ content: <div> 456 </div> },
	{ content: <div> 759 </div> },
	{ content: <div> 10 11 12 </div> },
];

const tabSlides = [
	{ title: 'Title 1', content: <div> 123 </div> },
	{ title: 'Title 2', content: <div> 456 </div> },
	{ title: 'Title 3', content: <div> 759 </div> },
];

const Overview = () => {
	return (
		<div className='p-5 grid gap-5'>
			<AnalyticsComparison />
			<div className='grid grid-cols-1 gap-5'>
				{/* 1 */}
				<div className='grid grid-cols-3 col-span-1 gap-5'>
					<div className=' col-span-2 '>
						<LineChart />
					</div>
					<div className=' col-span-1 '>
						<SlideCard slides={slides} title='Title' percentage='4.71' positive />
					</div>
				</div>
				{/* 2 */}
				<div className='grid grid-cols-3 col-span-1  gap-5'>
					<div className=' col-span-1 '>
						<ChannelChart />
					</div>
					<div className=' col-span-1 '>
						<ChannelChart />
					</div>
					<div className=' col-span-1 '>
						<ChannelChart />
					</div>
				</div>
				{/* 3 */}
				<div className='grid grid-cols-3 col-span-1  gap-5'>
					<div className=' col-span-2 '>
						<LineChart />
					</div>
					<div className=' col-span-1 '>
						<SlideCard slides={slides} title='Title' percentage='4.71' positive />
					</div>
				</div>
				{/* 4 */}
				<div className='grid grid-cols-3 col-span-1  gap-5'>
					<div className=' col-span-2 '>
						<Orders />
					</div>
					<div className=' col-span-1 '>
						<SlideCardTabs slides={tabSlides} />
					</div>
				</div>
				{/* 5 */}
				<div className='grid grid-cols-3 col-span-1  gap-5'>
					<div className=' col-span-2 '>
						<RecentActivity />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;

const RecentActivity = () => {
	return (
		<div className='grid gap-5 bg-white rounded-xl border border-borders-lines p-5'>
			<h2 className='title '>Recent activity</h2>
			<div className='flex gap-4 flex-wrap'>
				{data.statsData.slice(0, 3).map((item, index) => (
					<StatsCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};


