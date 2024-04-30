import React from 'react';
import { UseLanguage } from '../../CustomHook/LanguageHook';

const MenuSelect = ({ options }: { options: any[] }) => {
	const language = UseLanguage();
	return (
		<ul
			className={`rounded shadow-md p-2 flex flex-col min-w-48 bg-white w-fit absolute top-16 ${
				language === 'ar' ? 'left-0' : 'right-0'
			}  z-50`}
		>
			{options.map((option) => (
				<MenuItem
					key={option.id}
					text={option.text}
					icon={option.icon}
					onClick={option.onClick}
					id={option.id}
				/>
			))}
		</ul>
	);
};

export default MenuSelect;

interface MenuItemProps {
	text: string;
	icon: React.ReactNode;
	onClick: () => void;
	id: string;
}

function MenuItem({ text, icon, onClick, id }: MenuItemProps) {
	return (
		<li
			onClick={onClick}
			className='flex text-title cursor-pointer gap-3 
            items-center px-4 py-3 hover:bg-light-3 transition-all'
			id={id}
		>
			{icon}
			{text}
		</li>
	);
}
