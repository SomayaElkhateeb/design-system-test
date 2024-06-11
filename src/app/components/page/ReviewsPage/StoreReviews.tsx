import RecentReview from 'src/pages/ReviewsPage copy/StoreReviews/_comp/RecentReview';
import { ChannelChart, DonutCard, SimpleTable } from '../../optimized';
import DonutGraph from '../../optimized/Charts/DonutChart/DonutGraph';

// import StoreReviewsTableMobile from 'src/pages/ReviewsPage copy/StoreReviews/_comp/StoreReviewsTableMobile';
import { useState } from 'react';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import StoreReviewsTableMobile from 'src/pages/ReviewsPage copy/StoreReviews/_comp/StoreReviewsTableMobile';
import { columns, rows } from 'src/pages/ReviewsPage copy/StoreReviews/_comp/StoreReviewsData';
// import { columns, rows } from 'src/pages/ReviewsPage copy/StoreReviews/_comp/StoreReviewsData';
const chartData = [
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
export const StoreReviews = () => {
	const [selectedStates, setSelectedStates] = useState<TableRow[]>([]);

	const { xs } = useResponsive();
	return (
		<div className='flex-col-global'>
			<div className='grid lg:grid-cols-2 sm:grid-cols-1 items-start gap-4'>
				<RecentReview />
				{/* <DonutCard
					title='Net Promoter Score'
					score={4.75}
					graph={<DonutGraph chartData={chartData} />}
					legends={chartData}
				/> */}

				<ChannelChart
					title='net promoter score'
					percentage='4.75'
					labels={['Detractors', 'Passives', 'Promoters']}
					colors={['#e74c3c', '#F97316', '#2ecc71']}
					series={[44, 55, 41]}
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
