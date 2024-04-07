import React, { ReactNode } from 'react';

interface HeaderProps {
	children: ReactNode;
}

const HeaderTable: React.FC<HeaderProps> = ({ children }) => {
	return (
		<thead
			className='uppercase rounded-md text-subtitle px-[1rem] z-50  text-sm bg-white h-[2.6rem] flex items-center justify-between my-3'
			style={{ position: 'sticky', top: 180 }}
		>
			{children}
		</thead>
	);
};

export default HeaderTable;
