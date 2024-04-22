import { useState } from 'react';
import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';
import { ColumnChart } from 'src/app/components/optimized';

import ProductsTable from 'src/app/components/page/Analytics/ProductsTable';
import { getImageUrl } from 'src/app/utils';

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
	//  hooks
	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);

	const handleComparisonChange = (option: string) => {
		setSelectedComparisonOption(option);
	};
	return (
		<div className='p-5 grid gap-5'>
			<CompareBar
				selectedComparisonOption={selectedComparisonOption}
				handleComparisonChange={handleComparisonChange}
			/>
			<ColumnChart />

			<ProductsTable data={data} />
		</div>
	);
};

export default Products;
