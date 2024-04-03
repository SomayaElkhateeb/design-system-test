import { ReactNode } from 'react';

interface BodyProps {
	children: ReactNode;
}

const BodyTable: React.FC<BodyProps> = ({ children }) => {
	return <tbody className='rounded-md text-title text-sm bg-red-500 h-[40rem] overflow-auto'>{children}</tbody>;
};

export default BodyTable;
