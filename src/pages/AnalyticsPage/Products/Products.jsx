import { useState } from 'react';
import { ColumnChart } from 'src/app/components/optimized';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
import ProductActions from './comp/ProductActions';
const sortMenus = [
	{ id: '1', text: 'Today' },
	{ id: '2', text: 'Last week' },
	{ id: '3', text: 'Last month' },
	{ id: '3', text: 'Specify date' },
];
const Products = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
	};
	return (
		<div className='p-5 grid gap-5'>
			<div className='mb-4 flex items-center gap-2'>
				<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
				<div className='flex gap-2'>
					<p className='paragraph text-subtitle'>Compared to:</p>
					<p className='paragraph text-title'>{selectedOption}</p>
				</div>
			</div>
			<ColumnChart/>
			{/* <ProductActions/> */}
		</div>
	);
};

export default Products;
