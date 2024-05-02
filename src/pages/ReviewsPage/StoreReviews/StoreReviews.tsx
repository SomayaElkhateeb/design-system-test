import { DonutCard, SimpleTable } from 'src/app/components/optimized';
import { columns, data } from './_comp/StoreReviewsData';
import DonutGraph, { ChartData } from 'src/app/components/optimized/Charts/DonutChart/DonutGraph';
import RecentReview from './_comp/RecentReview';

const chartData: ChartData[] = [
	{
		label: 'Detractors',
		value: 31,
		color: '#e74c3c',
	},
	{
		label: 'Passives',
		value: 31,
		color: '#F97316',
	},
	{
		label: 'Promoters',
		value: 41,
		color: '#2ecc71',
	},
];

const StoreReviews = () => {
	return (
		<div className='flex-col-top-section-pages'>
			<div className='grid lg:grid-cols-2 sm:grid-cols-1 items-start gap-4'>
				<RecentReview/>
				<DonutCard
					title='Net Promoter Score'
					score={4.75}
					graph={<DonutGraph chartData={chartData} />}
					legends={chartData}
				/>
			</div>
			<SimpleTable columns={columns} data={data} itemsPerPage={3} exportFilename='StoreReviews' />
		</div>
	);
};

export default StoreReviews;
