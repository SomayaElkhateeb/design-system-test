import { AnalyticsCustomer } from '../AnalyticsCustomers';

export default function CustomersTableMobile({ tableData }: { tableData: AnalyticsCustomer[] }) {
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

function TableBody({ item }: { item: AnalyticsCustomer }) {
	const tableBodyItems = [
		{ label: 'New customers', value: item.new_customers },
		{ label: 'purchasing Customers', value: item.purchasing_customers },
		{ label: 'Customer groups', value: item.customer_groups },
	];

	return (
		<section
			className='grid gap-x-5 gap-y-3'
			style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}
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
