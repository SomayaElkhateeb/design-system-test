import React, { ReactNode } from 'react';

interface BodyProps {
	children: ReactNode;
}

const BodyTable: React.FC<BodyProps> = ({ children }) => {
	return (
		<tbody className='text-subtitle text-sm flex flex-col items-center overflow-auto bg-light-1 h-[30rem]'>
			{children}
		</tbody>
	);
};

export default BodyTable;
