import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';
import AnalyticsTableActions from '../comp/AnalyticsTableActions';
import { ColumnChart } from 'src/app/components/optimized';
import useAnalyticsData from '../comp/useAnalyticsData';
import data from '../comp/data.json';
// import Table from '../comp/Table';
import { useTranslation } from 'react-i18next';
import CustomersTable from './comp/CustomersTable';
import { getNumericValue, parseDate } from 'src/app/utils';

const Customers = () => {
	const { t } = useTranslation();

	const customersSortMenus = [
		{ text: t('Date Added') },
		{ text: t('Date (Oldest)') },
		{ text: t('New customers Descending') },
		{ text: t('New customers Ascending') },
		{ text: t('Purchasing customers Descending') },
		{ text: t('Purchasing customers Ascending') },
		{ text: t('Customer groups Descending') },
		{ text: t('Customer groups Ascending') },
	];

	const customersSortFunctions: Record<string, (a: any, b: any) => number> = {
		[t('Date Added')]: (a, b) => parseDate(b.day) - parseDate(a.day),
		[t('Date (Oldest)')]: (a, b) => parseDate(a.day) - parseDate(b.day),
		[t('New customers Descending')]: (a, b) => b.new_customers - a.new_customers,
		[t('New customers Ascending')]: (a, b) => a.new_customers - b.new_customers,
		[t('Purchasing customers Descending')]: (a, b) =>
			getNumericValue(b.purchasing_customers) - getNumericValue(a.purchasing_customers),
		[t('Purchasing customers Ascending')]: (a, b) =>
			getNumericValue(a.purchasing_customers) - getNumericValue(b.purchasing_customers),
		[t('Customer groups Descending')]: (a, b) => b.customer_groups - a.customer_groups,
		[t('Customer groups Ascending')]: (a, b) => a.customer_groups - b.customer_groups,
	};
	const {
		arrange,
		tableData,
		handleArrangeChange,
		handleComparisonChange,
		selectedComparisonOption,
	} = useAnalyticsData(data.customersAnalyticsTable, customersSortFunctions);

	return (
		<div className='p-3 grid gap-5'>
			<CompareBar
				selectedComparisonOption={selectedComparisonOption}
				handleComparisonChange={handleComparisonChange}
			/>
			<ColumnChart />
			<AnalyticsTableActions
				data={tableData}
				sortMenus={customersSortMenus}
				selectedOption={arrange}
				onSelectOption={handleArrangeChange}
				documentTitle='Customer Table Data'
			/>

			<CustomersTable tableData={tableData} />
			{/* <Table data={tableData} headers={customersTableHeaders} /> */}
		</div>
	);
};

export default Customers;
