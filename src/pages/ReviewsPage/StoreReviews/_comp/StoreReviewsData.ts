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
	{ header: 'DAY', accessor: 'day' },
	{ header: 'RATINGS NO.', accessor: 'ratingsNo' },
	{ header: 'Average', accessor: 'average' },
	{ header: 'Top customer group', accessor: 'topCustomerGroup' },
	{ header: 'Orders', accessor: 'orders' },
	{ header: 'Returns', accessor: 'returns' },
];

export const rows = [
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
		day: 'Mon 22 April',
		ratingsNo: 11,
		average: 4.5,
		topCustomerGroup: 'Niche goup',
		orders: 15,
		returns: 2,
	},
	{
		id: 3,
		day: 'Mon 23 April',
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
	{
		id: 4,
		day: 'Mon 21 April',
		ratingsNo: 13,
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
	{
		id: 4,
		day: 'Mon 21 April',
		ratingsNo: 13,
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
