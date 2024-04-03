import React from 'react';

interface TikCreateAccountProps {
	data: {
		description: string,
	};
}

const TikCreateAccount: React.FC<TikCreateAccountProps> = ({ data }) => {
	return <p>{data.description}</p>;
};

export default TikCreateAccount;
