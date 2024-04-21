export interface TableColumn {
	key: keyof TableData;
	title: string;
	accessor: keyof TableData;
}

export interface TableData {
	id: number;
	day: string;
	ratingsNo: number;
	average: number;
	topCustomerGroup: string;
	orders: number;
	returns: number;
}
export const columns = [
	{ key: 'day', title: 'DAY', accessor: 'day' },
	{ key: 'ratingsNo', title: 'RATINGS NO.', accessor: 'ratingsNo' },
	{ key: 'average', title: 'Average', accessor: 'average' },
	{ key: 'topCustomerGroup', title: 'Top customer group', accessor: 'topCustomerGroup' },
	{ key: 'orders', title: 'Orders', accessor: 'orders' },
	{ key: 'returns', title: 'Returns', accessor: 'returns' },
];

export const data = [
	{
		id: 1,
		day: 'Mon 21 April',
		ratingsNo: 10,
		average: 4.5,
		topCustomerGroup: 'Niche goup',
		orders: 15,
		returns: 2,
	},
	{
		id: 2,
		day: 'Mon 21 April',
		ratingsNo: 11,
		average: 4.5,
		topCustomerGroup: 'Niche goup',
		orders: 15,
		returns: 2,
	},
	{
		id: 3,
		day: 'Mon 21 April',
		ratingsNo: 12,
		average: 4.5,
		topCustomerGroup: 'Niche goup',
		orders: 15,
		returns: 2,
	},
	{
		id: 4,
		day: 'Mon 21 April',
		ratingsNo: 13,
		average: 4.5,
		topCustomerGroup: 'Niche goup',
		orders: 15,
		returns: 2,
	},
];
