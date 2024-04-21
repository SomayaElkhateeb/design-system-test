import { useState } from 'react';
import { StackedColumnChart } from 'src/app/components/optimized';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
// import CustomersActions from './comp/CustomersActions';
import { Table } from '@mui/material';
import data from '../comp/data.json';
import { nanoid } from 'nanoid';

const comparisonMenus = [
	{ id: nanoid(), text: 'Today' },
	{ id: nanoid(), text: 'Last week' },
	{ id: nanoid(), text: 'Last month' },
	{ id: nanoid(), text: 'Specify date' },
];
const headers = ['day ', 'new customers', 'purchasing customers', 'customer groups'];
const sortMenus = [
	{ id: nanoid(), text: 'Day (Latest)' },
	{ id: nanoid(), text: 'Day (Oldest)' },
	{ id: nanoid(), text: 'new customers (High-Low)' },
	{ id: nanoid(), text: 'new customers (Low-High)' },
	{ id: nanoid(), text: 'purchasing customers (High-Low)' },
	{ id: nanoid(), text: 'purchasing customers (Low-High)' },
	{ id: nanoid(), text: 'customer groups (High-Low)' },
	{ id: nanoid(), text: 'customer groups (Low-High)' },
];
const sortFunctions = {
	day: (a, b) => {
		// Convert date strings to Date objects for comparison
		const dateA = new Date(a.day);
		const dateB = new Date(b.day);
		return dateA - dateB;
	},
	new_customers: (a, b) => a.new_customers - b.new_customers,
	purchasing_customers: (a, b) => a.purchasing_customers - b.purchasing_customers,
	customer_groups: (a, b) => a.customer_groups - b.customer_groups,
};

const Customers = () => {
	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);
	const [arrange, setArrange] = useState();
	const [tableData, setTableData] = useState(data.customers_analytics_table);

	const handleComparisonChange = (option) => {
		setSelectedComparisonOption(option);
	};

	const handleArrangeChange = (option) => {
		setArrange(option);
		if (option) {
			const sortedData = tableData.slice().sort(sortFunctions[option]); // Sort a copy of data
			setTableData(sortedData);
		}
	};

	// const handleArrangeChange = (option) => {
	// 	setArrange(option);
	//   const sortedData = option ? [...tableData].sort((a, b) => {
	//     if (sortFunctions[option]) {
	//       return sortFunctions[option](a, b);
	//     } else {
	//       return 0;
	//     }
	//   }) : tableData;
	//   setTableData(sortedData);
	// };

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
			<StackedColumnChart
				percentage='72.8'
				categories={[
					'May 1',
					'May 2',
					'May 3',
					'May 4',
					'May 5',
					'May 6',
					'May 7',
					'May 8',
					'May 9',
					'May 10',
					'May 11',
					'May 12',
					'May 13',
					'May 14',
					'May 15',
				]}
				colors={['#EC5151', '#FFCC73']}
			/>
			{/* <CustomersActions sortMenus={sortMenus} selectedOption={arrange} onSelectOption={handleArrangeChange} /> */}
			<Table data={tableData} headers={headers} />
		</div>
	);
};

export default Customers;
