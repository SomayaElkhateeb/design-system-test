import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';
import AnalyticsTableActions from '../comp/AnalyticsTableActions';
import { ColumnChart } from 'src/app/components/optimized';
import useAnalyticsData from '../comp/useAnalyticsData';
import data from '../comp/data.json';
// import Table from '../comp/Table';
import { useTranslation } from 'react-i18next';
import CustomersTable from './comp/CustomersTable';
import { getNumericValue, parseDate } from 'src/app/utils';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import CustomersTableMobile from './comp/CustomersTableMobile';

export interface AnalyticsCustomer {
	day: string;
	new_customers: number;
	purchasing_customers: string;
	customer_groups: string;
}
const Customers = () => {
	const { t } = useTranslation();
	const { xs } = useResponsive();

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

	const customersSortFunctions: Record<
		string,
		(a: AnalyticsCustomer, b: AnalyticsCustomer) => number
	> = {
		[t('Date Added')]: (a, b) => parseDate(b.day) - parseDate(a.day),
		[t('Date (Oldest)')]: (a, b) => parseDate(a.day) - parseDate(b.day),
		[t('New customers Descending')]: (a, b) => b.new_customers - a.new_customers,
		[t('New customers Ascending')]: (a, b) => a.new_customers - b.new_customers,
		[t('Purchasing customers Descending')]: (a, b) =>
			getNumericValue(b.purchasing_customers) - getNumericValue(a.purchasing_customers),
		[t('Purchasing customers Ascending')]: (a, b) =>
			getNumericValue(a.purchasing_customers) - getNumericValue(b.purchasing_customers),
		[t('Customer groups Descending')]: (a, b) =>
			getNumericValue(b.customer_groups) - getNumericValue(a.customer_groups),
		[t('Customer groups Ascending')]: (a, b) =>
			getNumericValue(a.customer_groups) - getNumericValue(b.customer_groups),
	};
	const { arrange, tableData, handleArrangeChange, handleSelect, selectedOption } =
		useAnalyticsData<AnalyticsCustomer>(data.customersAnalyticsTable, customersSortFunctions);

	return (
		<div className=' grid gap-5'>
			<CompareBar selectedComparisonOption={selectedOption} handleComparisonChange={handleSelect} />
			<ColumnChart percentage='5' />
			<AnalyticsTableActions
				data={tableData}
				sortMenus={customersSortMenus}
				selectedOption={arrange}
				onSelectOption={handleArrangeChange}
				documentTitle='Customer Table Data'
			/>

			<CustomersTable tableData={tableData} />
			{/* <Table data={tableData} headers={customersTableHeaders} /> */}
			{xs && <CustomersTableMobile tableData={tableData} />}
		</div>
	);
};

export default Customers;
