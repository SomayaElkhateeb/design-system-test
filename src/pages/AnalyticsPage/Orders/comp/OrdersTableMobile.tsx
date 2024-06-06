import { AnalyticsOrder } from '../AnalyticsOrders';

export default function OrdersTableMobile({ tableData }: { tableData: AnalyticsOrder[] }) {
	return (
		<div className='grid gap-3 divide-y'>
			{tableData.map((item, index) => (
				<div key={index} className='grid gap-1 py-3'>
					<h2 className='title'>{item.day}</h2>
					<TableBody item={item} />
				</div>
			))}
		</div>
	);
}

function TableBody({ item }: { item: AnalyticsOrder }) {
	const tableBodyItems = [
		{ label: 'Orders', value: item.orders },
		{ label: 'Delivered', value: item.delivered },
		{ label: 'Returned', value: item.returned_quantity },
		{ label: 'Average units ordered', value: item.average_units_ordered },
		{ label: 'Average order value', value: item.average_order_value },
	];

	return (
		<section
			className='grid gap-x-5 gap-y-3'
			style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))' }}
		>
			{tableBodyItems.map((bodyItem, index) => (
				<div className='grid gap-1' key={index}>
					<p className='paragraph text-subtitle'>{bodyItem.label}</p>
					<p className='paragraph text-title'>{bodyItem.value}</p>
				</div>
			))}
		</section>
	);
}
