import { DonutCard, SimpleTable } from 'src/app/components/optimized';
import { columns, rows } from './_comp/StoreReviewsData';
import DonutGraph, { ChartData } from 'src/app/components/optimized/Charts/DonutChart/DonutGraph';
import RecentReview from './_comp/RecentReview';
import { useState } from 'react';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import StoreReviewsTableMobile from './_comp/StoreReviewsTableMobile';

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

export interface TableRow {
	[key: string]: any;
}

const StoreReviews = () => {
	const [selectedStates, setSelectedStates] = useState<TableRow[]>([]);

	const { xs } = useResponsive();

	return (
		<div className='flex-col-global'>
			<div className='grid lg:grid-cols-2 sm:grid-cols-1 items-start gap-4'>
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
				rows={rows}
				itemsPerPage={3}
				exportFilename='StoreReviews'
				selectedStates={selectedStates}
				setSelectedStates={setSelectedStates}
			/>
			{xs && <StoreReviewsTableMobile tableData={rows} />}
		</div>
	);
};

export default StoreReviews;
