import React from 'react';
import { GroupIcons, ToggleSwitch } from 'src/app/components/optimized';

interface Item {
	id: string;
	name: string;
	value: number;
	date: string;
	sales: number;
}

interface Props {
	bodyData?: Item[];
}

const Body: React.FC<Props> = ({ bodyData }) => {
	const body = bodyData?.map((item: Item) => {
		return (
			<tr key={item.id}>
				<td className='w-1/7 pl-[18px]'>{item.name}</td>
				<td className='w-1/7 text-center'>-SAR {item.value.toFixed(2)}</td>
				<td className='w-1/7 text-center'>{item.date}</td>
				<td className='w-1/7 flex justify-center pt-3'>
					<ToggleSwitch />
				</td>
				<td className='w-1/7 text-center'>SAR {item.sales.toFixed(2)}</td>
				<td className='w-1/7 flex justify-center pt-3 ml-8'>
					<GroupIcons variant='edit' />
				</td>
			</tr>
		);
	});

	return <>{body}</>;
};

export default Body;
