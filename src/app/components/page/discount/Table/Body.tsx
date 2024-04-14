import React from 'react';
import { GroupIcons, ToggleSwitch } from 'src/app/components/optimized';
import dayjs from 'dayjs';
interface Item {
	id: string;
	name: string;
	value: number;
	date: string;
	sales: number;
	used: number;
}

interface Props {
	bodyData?: Item[];
}

const Body: React.FC<Props> = ({ bodyData }) => {
	const body = bodyData?.map((item: Item) => {
		const formattedDate = dayjs(item.date).format('YYYY-MM-DD');
		return (
			<tr
				key={item.id}
				className='h-[2.6rem] flex items-center justify-between mb-3 px-[1rem] bg-white w-full rounded-md'
			>
				<td className='w-2/8 text-title font-semibold'>{item.name}</td>
				<td className='w-1/8'>-SAR {item?.value?.toFixed(2)}</td>
				<td className='w-1/8'>{formattedDate}</td>
				<td className='w-1/8 pt-4'>
					<ToggleSwitch />
				</td>
				<td className='w-1/8'>SAR {item?.value?.toFixed(2)}</td>
				<td className='w-1/8'>{item.used}</td>
				<td className='w-1/8'>
					<GroupIcons variant='edit' />
				</td>
			</tr>
		);
	});

	return <>{body}</>;
};

export default Body;
