import SlideCardTabs from 'src/app/components/page/Cards/SlideCardTabs';
import { ChannelChart, LineChart } from 'src/app/components/optimized';
import StatsCard from 'src/app/components/optimized/Cards/StatsCard';
import AnalyticsComparison from './comp/AnalyticsComparison';
import data from '../comp/data.json';
import AnalyticsReports from './comp/AnalyticsReports';
import OrdersCard from './comp/OrdersCard';

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

				<div className='grid grid-cols-12 gap-4 max-lg:grid-rows-2 col-span-1'>
					{/*  */}
					<div className='col-span-12 lg:col-span-7 xl:col-span-8'>
						{/*  */}
						<LineChart />
					</div>
					<div className='col-span-6 lg:col-span-5 xl:col-span-4'>
						{/* max-xl:col-span-8 */}
						<AnalyticsReports />
					</div>
				</div>

				{/* 2 */}
				<div
					className='grid col-span-1 gap-5 '
					style={{
						gridTemplateColumns: 'repeat(auto-fill, minmax(22rem, 1fr))',
					}}
				>
					<div>
						<ChannelChart />
					</div>
					<div>
						<ChannelChart />
					</div>
					<div>
						<ChannelChart />
					</div>
				</div>
				{/* 3 */}

				<div className='grid grid-cols-12 gap-4 max-lg:grid-rows-2 col-span-1'>
					<div className='col-span-12 lg:col-span-7 xl:col-span-8'>
						<LineChart />
					</div>
					<div className='col-span-6 lg:col-span-5 xl:col-span-4'>
						<AnalyticsReports />
					</div>
				</div>

				{/* 4 */}
				<div className='grid grid-cols-12 gap-4 max-lg:grid-rows-2 col-span-1'>
					<div className='col-span-12 lg:col-span-7 xl:col-span-8'>
						<OrdersCard latestOrders={data.latestOrders} />
					</div>
					<div className='col-span-6 lg:col-span-5 xl:col-span-4'>
						<SlideCardTabs slides={tabSlides} />
					</div>
				</div>
				{/* 5 */}
				<div className='grid grid-cols-12 col-span-1 gap-4'>
					<div className='col-span-12 lg:col-span-7 xl:col-span-8'>
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
