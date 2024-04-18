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
		<div className='p-5 grid gap-5'>
			<CompareBar selectedComparisonOption={selectedComparisonOption} handleComparisonChange={handleComparisonChange} />
			<ColumnChart />
			<AnalyticsTableActions
				data={tableData}
				sortMenus={ordersSortMenus}
				selectedOption={arrange}
				onSelectOption={handleArrangeChange}
				customersTableRef={AnalyticsTableRef}
				documentTitle='Orders Table Data'
			/>
			<Table data={tableData} headers={ordersTableHeaders} ref={AnalyticsTableRef} />
		</div>
	);
};

export default Orders;
