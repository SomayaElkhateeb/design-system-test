import { GroupIcons, ToggleSwitch } from '..';

/**
 * @typedef {{
 *  id: string;
 *  name: string;
 *  value: number;
 *  date: string;
 *  sales: number;
 * }} Item
 *
 * @param {{
 *  bodyData?: Item[];
 * }} props
 */
function Body(props) {
	const body = props.bodyData?.map((item) => {
		return (
			<tr key={item.id}>
				<td className='w-1/7 pl-[18px]'>{item.name}</td>
				<td className='text-center w-1/7'>-SAR {item.value.toFixed(2)}</td>
				<td className='text-center w-1/7'>{item.date}</td>
				<td className='flex justify-center pt-3 w-1/7'>
					<ToggleSwitch />
				</td>
				<td className='text-center w-1/7'>SAR {item.sales.toFixed(2)}</td>
				<td className='flex justify-center pt-3 ml-8 w-1/7'>
					<GroupIcons variant='edit' />
				</td>
			</tr>
		);
	});

	return <>{body}</>;
}

export default Body;
