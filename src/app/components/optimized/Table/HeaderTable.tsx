import { ReactNode } from 'react';

interface HeaderProps {
	children: ReactNode;
}

const HeaderTable: React.FC<HeaderProps> = ({ children }) => {
	return (
		<thead className='uppercase rounded-md text-subtitle text-sm bg-white h-[43px] mb-2 fixed top-0 left-0 right-0'>
			{children}
		</thead>
	);
};

export default HeaderTable;
