import React from 'react';
import SpecificCategory from './comp/SpecificCategory';
import SpecificProducts from './comp/SpecificProducts';

interface ApplyToOptionsProps {
	applyTo: string;
}

const ApplyToOptions: React.FC<ApplyToOptionsProps> = ({ applyTo }) => {
	return (
		<div>
			{applyTo === 'Specific category' && <SpecificCategory />}
			{applyTo === 'Specific products' && <SpecificProducts />}
		</div>
	);
};

export default ApplyToOptions;
