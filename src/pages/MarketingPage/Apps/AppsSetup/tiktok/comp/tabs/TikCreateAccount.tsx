import React from 'react';
import { TikCreateAccountProps } from '../tikTokTypes';

const TikCreateAccount: React.FC<TikCreateAccountProps> = ({ data }) => {
	return <p>{data.description}</p>;
};

export default TikCreateAccount;
