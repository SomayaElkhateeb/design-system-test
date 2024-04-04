import { useState } from 'react';
import { check } from 'src/app/utils/constants';

import { CheckBox } from '..';

export default function CheckMenu() {
	const [menuItems, setMenuItems] = useState(check);

	/** @param {string} id  */
	function handleClick(id) {
		setMenuItems((prevMenuItems) => {
			return prevMenuItems.map((item) => {
				if (item.id === id) {
					return { ...item, checked: !item.checked };
				}
				return item;
			});
		});
	}

	return (
		<div className='rounded bg-white shadow-md py-2 flex flex-col w-[341px] gap-0.5'>
			{menuItems.map((menuItem) => {
				const { id, text, checked } = menuItem;
				return (
					<div
						key={id}
						className={
							checked
								? 'flex text-title items-center bg-sec-light px-4 py-3 gap-2 duration-300 transition-all'
								: 'flex text-title items-center group hover:bg-sec-light px-4 py-3 gap-2 duration-300 transition-all'
						}
						onClick={() => handleClick(id)}
					>
						<CheckBox checked={checked} />
						<span className='mt-1 text-sm'>{text}</span>
					</div>
				);
			})}
		</div>
	);
}
