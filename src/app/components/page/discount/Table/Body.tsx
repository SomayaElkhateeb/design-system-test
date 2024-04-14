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
	onClick: any;
}

const Body: React.FC<Props> = ({ bodyData, onClick }) => {
	const body = bodyData?.map((item: Item) => {
		const formattedDate = dayjs(item.date).format('YYYY-MM-DD');
		return (
			<tr
				key={item.id}
				className='h-[2.6rem] flex items-center justify-between mb-3 px-[1rem] bg-white w-full rounded-md '
			>
				<td className=' text-title font-semibold '>{item.name}</td>
				<td className=' '>-SAR {item?.value?.toFixed(2)}</td>
				<td className=''>{formattedDate}</td>
				<td className=' pt-4'>
					<ToggleSwitch />
				</td>
				<td className=''>SAR {item?.value?.toFixed(2)}</td>
				<td className=''>{item.used}</td>
				<td className=''>
					<GroupIcons variant='edit' onClick={onClick} />
				</td>
			</tr>
		);
	});

	return <>{body}</>;
};

export default Body;
