import { useState } from 'react';
import {  ArrangeButton, ColumnChart } from 'src/app/components/optimized';

import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';

import ProductsTable from 'src/app/components/page/Analytics/ProductsTable';
import { getImageUrl } from 'src/app/utils';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
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
	//  hooks

	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);
	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

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

			<div className='mb-4 flex items-center gap-2'>
				<div className='grid gap-5 p-5'>
					<div className='flex items-center gap-2 mb-4'>
						<ArrangeButton
							sortMenus={sortMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
						<div className='flex gap-2'>
							<p className='paragraph text-subtitle'>Compared to:</p>
							<p className='paragraph text-title'>{selectedOption}</p>
						</div>
					</div>
					<ColumnChart percentage='40' negative />
					{/* <ProductActions/> */}

					<ProductsTable data={data} />
				</div>
			</div>
		</div>
	);
};

export default Products;
