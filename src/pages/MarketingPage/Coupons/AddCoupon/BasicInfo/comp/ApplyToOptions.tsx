import React from 'react';
import SpecificCategory from 'src/app/components/page/discount/Selectors/SpecificCategory';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';

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
