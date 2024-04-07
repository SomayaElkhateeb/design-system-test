import React from 'react';

interface HeaderItem {
	name: string;
	type: string;
	date: string;
	active: string;
	sales: string;
	used: string;
	actions: string;
}

interface Props {
	headerData?: HeaderItem[]; // Make headerData optional
}

const Header: React.FC<Props> = ({ headerData }) => {
	// Check if headerData is undefined or not an array
	if (!headerData || !Array.isArray(headerData)) {
		return null; // Return null or another fallback component
	}

	const header = headerData.map((item, index) => {
		return (
			<tr key={index}>
				<th className='w-2/8 font-normal'>{item.name}</th>
				<th className='w-1/8 font-normal'>{item.type}</th>
				<th className='w-1/8 font-normal'>{item.date}</th>
				<th className='w-1/8 font-normal'>{item.active}</th>
				<th className='w-1/8 font-normal'>{item.sales}</th>
				<th className='w-1/8 font-normal'>{item.used}</th>
				<th className='w-1/8 font-normal'>{item.actions}</th>
			</tr>
		);
	});

	return <>{header}</>;
};

export default Header;
