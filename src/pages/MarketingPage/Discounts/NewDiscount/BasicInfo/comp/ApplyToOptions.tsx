import React from 'react';
import SpecificCategory from '../../../../../../app/components/page/discount/Selectors/SpecificCategory';
import SpecificProducts from '../../../../../../app/components/page/discount/Selectors/SpecificProducts';
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
