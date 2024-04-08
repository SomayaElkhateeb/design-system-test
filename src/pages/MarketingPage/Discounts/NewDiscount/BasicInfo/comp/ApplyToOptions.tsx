import React from 'react';
import SpecificCategory from './comp/SpecificCategory';
import SpecificProducts from './comp/SpecificProducts';
import BuyXGetY from './comp/BuyXGetY';

interface ApplyToOptionsProps {
	applyTo: string;
}

const ApplyToOptions: React.FC<ApplyToOptionsProps> = ({ applyTo }) => {
	return (
		<div>
			{applyTo === 'Specific category' && <SpecificCategory />}
			{applyTo === 'Specific products' && <SpecificProducts />}
			{applyTo === 'Buy x get y' && <BuyXGetY />}
		</div>
	);
};

export default ApplyToOptions;
