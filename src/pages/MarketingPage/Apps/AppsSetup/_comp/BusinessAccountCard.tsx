import React, { useState } from 'react';
import { Button } from 'src/app/components/optimized';

interface Partner {
	userId: string;
	partnerName: string;
	partnerImage: string;
	partnerStatus: boolean;
}
const BusinessAccountCard: React.FC<Partner> = ({
	partnerImage,
	partnerName,
	partnerStatus,
	userId,
}) => {
	const [status, setStatus] = useState<boolean>(partnerStatus);

	const toggleStatus = () => {
		setStatus(!status);
	};

	return (
		<div className='flex items-center justify-between overflow-hidden bg-white border-b rounded-lg'>
			<div className='flex items-center px-5 py-4 border-b border-gray-200'>
				<img className='w-10 h-10 mr-3 rounded-full' src={partnerImage} alt='Partner picture' />
				<div className='flex flex-col'>
					<span className='text-sm font-bold text-gray-800'>{partnerName}</span>
					<span className='text-xs text-gray-500'>{status ? 'Connected' : 'Disconnected'}</span>
					<p className='text-sm text-gray-800'>
						<span className='text-gray-500'>User ID #</span>
						{userId}
					</p>
				</div>
			</div>
			<div className='p-4'>
				<Button onClick={toggleStatus} variant='secondary'>
					{status ? 'Disconnect' : 'Connect'}
				</Button>
			</div>
		</div>
	);
};

export default BusinessAccountCard;
