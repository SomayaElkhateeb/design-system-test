import React from 'react';
import { Button } from 'src/app/components/optimized';

interface Props {
	data: {
		description: string;
	};
}

const SnapCreateAccount: React.FC<Props> = ({ data }) => {
	return (
		<div className='flex items-center justify-between'>
			<p>{data.description}</p>
			<Button>Connect Account</Button>
		</div>
	);
};

export default SnapCreateAccount;
