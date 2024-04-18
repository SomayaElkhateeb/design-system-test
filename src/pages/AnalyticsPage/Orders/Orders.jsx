import { useState } from 'react';
import { ColumnChart } from 'src/app/components/optimized';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
import OrderActions from './comp/OrderActions';
import { nanoid } from 'nanoid';
import data from '../comp/data.json';
import Table from '../comp/Table';

const comparisonMenus = [
	{ id: '1', text: 'Today' },
	{ id: '2', text: 'Last week' },
	{ id: '3', text: 'Last month' },
	{ id: '3', text: 'Specify date' },
];
const sortMenus = [
	{ id: nanoid(), text: 'Day (Latest)' },
	{ id: nanoid(), text: 'Day (Oldest)' },
	{ id: nanoid(), text: 'Orders (High-Low)' },
	{ id: nanoid(), text: 'Orders (Low-High)' },
	{ id: nanoid(), text: 'Average units ordered (High-Low)' },
	{ id: nanoid(), text: 'Average units ordered (Low-High)' },
	{ id: nanoid(), text: 'Average order value (High-Low)' },
	{ id: nanoid(), text: 'Average order value (Low-High)' },
	{ id: nanoid(), text: 'Delivered (High-Low)' },
	{ id: nanoid(), text: 'Delivered (Low-High)' },
	{ id: nanoid(), text: 'Returned quantity (High-Low)' },
	{ id: nanoid(), text: 'Returned quantity (Low-High)' },
];

const sortByDate = (dateString) => {
	const date = new Date(dateString);
	return date.getTime();
};
const getNumericValue = (str) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;

const sortFunctions = {
	'Day (Latest)': (a, b) => {
		const dateA = new Date(a.day);
		const dateB = new Date(b.day);
		return dateB - dateA;
	},
	'Day (Oldest)': (a, b) => {
		const dateA = new Date(a.day);
		const dateB = new Date(b.day);
		return dateA - dateB;
	},
	'Orders (High-Low)': (a, b) => b.orders - a.orders,
	'Orders (Low-High)': (a, b) => a.orders - b.orders,
	'Average units ordered (High-Low)': (a, b) => b.average_units_ordered - a.average_units_ordered,
	'Average units ordered (Low-High)': (a, b) => a.average_units_ordered - b.average_units_ordered,
	'Average order value (High-Low)': (a, b) =>
		getNumericValue(b.average_order_value) - getNumericValue(a.average_order_value),
	'Average order value (Low-High)': (a, b) =>
		getNumericValue(a.average_order_value) - getNumericValue(b.average_order_value),
	'Delivered (High-Low)': (a, b) => b.delivered - a.delivered,
	'Delivered (Low-High)': (a, b) => a.delivered - b.delivered,
	'Returned quantity (High-Low)': (a, b) => b.returned_quantity - a.returned_quantity,
	'Returned quantity (Low-High)': (a, b) => a.returned_quantity - b.returned_quantity,
};

const headers = ['DAY', 'ORDERS', 'AVERAGE UNITS ORDERED', 'AVERAGE ORDER VALUE', 'DELIVERED', 'RETURNED QUANTITY'];

const Orders = () => {
	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);
	const [arrange, setArrange] = useState();
	const [tableData, setTableData] = useState(data.orders_analytics_table);

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
