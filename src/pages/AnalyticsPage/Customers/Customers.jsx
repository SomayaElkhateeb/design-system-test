// @ts-nocheck

import { customersSortFunctions, customersSortMenus, customersTableHeaders } from '../comp/analyticsConstants';
import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';
import AnalyticsTableActions from '../comp/AnalyticsTableActions';
import { ColumnChart } from 'src/app/components/optimized';
import useAnalyticsData from '../comp/useAnalyticsData';
import data from '../comp/data.json';
import Table from '../comp/Table';

const Customers = () => {
	const {
		selectedComparisonOption,
		setSelectedComparisonOption,
		arrange,
		setArrange,
		tableData,
		handleComparisonChange,
		handleArrangeChange,
		AnalyticsTableRef,
	} = useAnalyticsData(data.customers_analytics_table, customersSortFunctions);

	return (
		<div className='p-5 grid gap-5'>
			<CompareBar selectedComparisonOption={selectedComparisonOption} handleComparisonChange={handleComparisonChange} />
			<ColumnChart />
			<AnalyticsTableActions
				data={tableData}
				sortMenus={customersSortMenus}
				selectedOption={arrange}
				onSelectOption={handleArrangeChange}
				customersTableRef={AnalyticsTableRef}
				documentTitle='Customer Table Data'
			/>
			<Table data={tableData} headers={customersTableHeaders} ref={AnalyticsTableRef} />
		</div>
	);
};

export default Customers;
