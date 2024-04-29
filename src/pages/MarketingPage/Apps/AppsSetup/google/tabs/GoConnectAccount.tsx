import React from 'react';
import { Button } from 'src/app/components/optimized';

interface GoConnectAccountProps {
	data: {
		description: string,
	};
}

const GoConnectAccount: React.FC<GoConnectAccountProps> = ({ data }) => {
	return (
		<div className='flex items-center justify-between'>
			<p>{data.description}</p>
			<Button>Connect Account</Button>
		</div>
	);
};

export default GoConnectAccount;
