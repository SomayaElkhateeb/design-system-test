import React from 'react';
import SpecificGroups from './SpecificGroups';
import SpecificCustomers from './SpecificCustomers';

interface CustomerSegmentOptionsProps {
	segmentOptions: string;
}

const CustomerSegmentOptions: React.FC<CustomerSegmentOptionsProps> = ({ segmentOptions }) => {
	return (
		<div>
			{segmentOptions === 'Specific customer groups' && <SpecificGroups />}
			{segmentOptions === 'Specific customers' && <SpecificCustomers />}
		</div>
	);
};

export default CustomerSegmentOptions;
