import { useState } from 'react';
import { ColumnChart } from 'src/app/components/optimized';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
import ProductActions from './comp/ProductActions';
import ProductsTable from 'src/app/components/page/Analytics/ProductsTable';
import { getImageUrl } from 'src/app/utils';
const sortMenus = [
	{ id: '1', text: 'Today' },
	{ id: '2', text: 'Last week' },
	{ id: '3', text: 'Last month' },
	{ id: '3', text: 'Specify date' },
];

//  dumy data
const data = [
	{
		id: '1',
		title: 'DJI Mavic Pro 2',
		category: 'Blankets',
		quantity: 10,
		price: 1000,
		searches: 500,
		views: 62,
		quantitySold: 452,
		returns: 180,
		img: getImageUrl('images/product.png'),
	},
	{
		id: '2',
		title: 'DJI Mavic Pro 2',
		category: 'Blankets',
		quantity: 225,
		price: 1000,
		searches: 500,
		views: 62,
		quantitySold: 452,
		returns: 180,
		img: getImageUrl('images/product.png'),
	},
	{
		id: '3',
		title: 'DJI Mavic Pro 2',
		category: 'Blankets',
		quantity: 75,
		price: 1000,
		searches: 500,
		views: 62,
		quantitySold: 452,
		returns: 180,
		img: getImageUrl('images/product.png'),
	},
	{
		id: '4',
		title: 'DJI Mavic Pro 2',
		category: 'Blankets',
		quantity: 62,
		price: 1000,
		searches: 500,
		views: 62,
		quantitySold: 452,
		returns: 180,
		img: getImageUrl('images/product.png'),
	},
];
const Products = () => {
	const [selectedOption, setSelectedOption] = useState(null);

const Products = () => {
	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);

	const handleComparisonChange = (option) => {
		setSelectedComparisonOption(option);
	};

	return (
		<div className='grid gap-5 p-5'>
			<div className='flex items-center gap-2 mb-4'>
				<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
				<div className='flex gap-2'>
					<p className='paragraph text-subtitle'>Compared to:</p>
					<p className='paragraph text-title'>{selectedOption}</p>
				</div>
			</div>
			<ColumnChart />
			{/* <ProductActions/> */}

			<ProductsTable data={data} />
		</div>
	);
};

export default Products;
