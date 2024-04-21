// @ts-nocheck

import { ordersSortFunctions, ordersSortMenus, ordersTableHeaders } from '../comp/analyticsConstants';
import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';
import AnalyticsTableActions from '../comp/AnalyticsTableActions';
import { ColumnChart } from 'src/app/components/optimized';
import useAnalyticsData from '../comp/useAnalyticsData';
import data from '../comp/data.json';
import Table from '../comp/Table';

const Orders = () => {
	const {
		selectedComparisonOption,
		setSelectedComparisonOption,
		arrange,
		setArrange,
		tableData,
		handleComparisonChange,
		handleArrangeChange,
		AnalyticsTableRef,
	} = useAnalyticsData(data.orders_analytics_table, ordersSortFunctions);

	return (

		<div className='p-3 grid gap-5'>
			<div className='mb-4 flex items-center gap-2'>
				<ArrangeButton
					sortMenus={comparisonMenus}
					selectedOption={selectedComparisonOption}
					handelSelect={handleComparisonChange}
				/>
				<div className='flex gap-2'>
					<p className='paragraph text-subtitle'>Compared to:</p>
					<p className='paragraph text-title'>{selectedComparisonOption}</p>
				</div>
			</div>
			<ColumnChart title='sales orders' percentage='77' />
			<OrderActions sortMenus={sortMenus} selectedOption={arrange} onSelectOption={handleArrangeChange} />
			<Table data={tableData} headers={headers} />

		</div>
	);
};

export default Orders;
