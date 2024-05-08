import { DonutCard, SimpleTable } from 'src/app/components/optimized';
import { columns, data } from './_comp/StoreReviewsData';
import DonutGraph, { ChartData } from 'src/app/components/optimized/Charts/DonutChart/DonutGraph';
import RecentReview from './_comp/RecentReview';
import { useState } from 'react';

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
interface TableRow {
	[key: string]: any;
}

const StoreReviews = () => {
	const [selectedStates, setSelectedStates] = useState<TableRow[]>([]);


	return (
		<div className='w-full'>
			<div className='flex justify-between my-5 p-2'>
				<RecentReview />
				<DonutCard
					title='Net Promoter Score'
					score={4.75}
					graph={<DonutGraph chartData={chartData} />}
					legends={chartData}
				/>
			</div>
			<SimpleTable
				columns={columns}
				data={data}
				itemsPerPage={3}
				exportFilename='StoreReviews'
				selectedStates={selectedStates}
				setSelectedStates={setSelectedStates}
			/>
		</div>
	);
};

export default StoreReviews;
