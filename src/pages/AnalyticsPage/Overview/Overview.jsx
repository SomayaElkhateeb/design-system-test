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
						<LineChart title='sales' percentage='4.75' />
					</div>
					<div className=' col-span-1 '>
						<SlideCard slides={slides} title='Title' percentage='4.71' positive />
					</div>
				</div>
				{/* 2 */}
				<div className='grid grid-cols-3 mx-auto gap-5'>
					<div className=' col-span-1 '>
						<ChannelChart title='sales by channel' percentage='50' />
					</div>
					<div className=' col-span-1 '>
						<ChannelChart
							title='sales by device'
							percentage='36.5'
							negative
							labels={['Ios', 'Android', 'Desktop']}
							colors={['#FFCC73', '#D65036', '#F59556']}
							series={[31, 31, 41]}
						/>
					</div>
					<div className=' col-span-1 '>
						<ChannelChart
							title='sales by customer groups'
							percentage='48'
							labels={['Group 1', 'Group 2']}
							colors={['#FFCC73', '#D65036']}
							series={[31, 69]}
						/>
					</div>
				</div>
				{/* 3 */}
				<div className='grid grid-cols-3 col-span-1  gap-5'>
					<div className=' col-span-2 '>
						<LineChart
							title='returning customers'
							percentage='17.8'
							negative
							nameA='First time'
							nameB='Returning'
							categories={['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7']}
							colors={['#446CCE', '#F59556']}
							dataA={[100, 230, 230, 500, 210, 180, 220]}
							dataB={[500, 210, 230, 700, 250, 800, 240]}
						/>
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
