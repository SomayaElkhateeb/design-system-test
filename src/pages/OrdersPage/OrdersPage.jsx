import { SimpleTable } from "src/app/components/optimized";

const OrdersPage = () => {
	const columns = [
		{ header: 'ID', accessor: 'id' },
		{ header: 'Name', accessor: 'name' },
		{ header: 'Age', accessor: 'age' },
		{ header: 'Switch', accessor: 'switch' },
		{ header: 'Actions', accessor: 'actions' },
	];

	const data = Array.from({ length: 100 }, (_, index) => ({
		id: index + 1,
		name: `Person ${index + 1}`,
		age: Math.floor(Math.random() * 50) + 20, // Random age between 20 and 70
		switch: <button onClick={() => alert('Switch')}>Switch</button>,
		actions: (
			<div className='flex space-x-2'>
				<button onClick={() => alert('Edit')}>Edit</button>
				<button onClick={() => alert('Delete')}>Delete</button>
			</div>
		),
	}));

	return (
		<div>
			<h1>Example Table</h1>
			<SimpleTable columns={columns} data={data} itemsPerPage={2} exportFilename='muhammed' />
		</div>
	);
};

export default OrdersPage;
