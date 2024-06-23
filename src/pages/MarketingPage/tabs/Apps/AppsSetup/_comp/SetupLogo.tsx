import React from 'react';
import { getImageUrl } from 'src/app/utils';

interface SetupLogoProps {
	iconPath: string;
}

const SetupLogo: React.FC<SetupLogoProps> = ({ iconPath }) => {
	return (
		<div className='flex items-center justify-center'>
			<img src={getImageUrl('brand/cloud.svg')} className='size-16 mx-1' />
			<div className='w-full flex justify-between items-center'>
				<span className='size-3 bg-gray-300 rounded-full'></span>
				<span className=' border-2 border-dashed w-full'></span>
				<span className='size-3 bg-gray-300 rounded-full'></span>
			</div>
			<img src={getImageUrl(iconPath)} className='size-16' />
		</div>
	);
};

export default SetupLogo;
