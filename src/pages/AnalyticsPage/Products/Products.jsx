import { useState } from 'react';
import { ColumnChart } from 'src/app/components/optimized';
import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';

const Products = () => {
	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);

	const handleComparisonChange = (option) => {
		setSelectedComparisonOption(option);
	};

	return (
		<div className='p-5 grid gap-5'>
			<CompareBar selectedComparisonOption={selectedComparisonOption} handleComparisonChange={handleComparisonChange} />
			<ColumnChart />
		</div>
	);
};

export default Products;
