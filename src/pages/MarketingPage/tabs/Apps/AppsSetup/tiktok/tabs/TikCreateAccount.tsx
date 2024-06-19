import React from 'react';
import { Button } from 'src/app/components/optimized';

interface TikCreateAccountProps {
	data: {
		description: string;
	};
}

const TikCreateAccount: React.FC<TikCreateAccountProps> = ({ data }) => {
	return (
		<div className='flex items-center justify-between'>
			<p>{data.description}</p>
			<Button>Connect Account</Button>
		</div>
	);
};

export default TikCreateAccount;
