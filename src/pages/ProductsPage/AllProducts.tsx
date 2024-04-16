import { nanoid } from 'nanoid';
import { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import AllProductsTable from 'src/app/components/page/Products/AllProducts/AllProductsTable';
import VerticalproductsCard from 'src/app/components/page/Products/AllProducts/AllproductsVertical';
import TopSection from 'src/app/components/page/Products/AllProducts/TopSection';
import { Product } from 'src/app/interface/ProductInterface';
import { getImageUrl } from 'src/app/utils';
import { AnalyticsIcon, CopyIcon, OrdersIcon } from 'src/app/utils/icons';

//  setting menus for setting button action and will be used in brands section page
export const settingMenus = [
	{ id: nanoid(), text: 'Copy product link', icon: <CopyIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product report', icon: <AnalyticsIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product orders', icon: <OrdersIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Export product orders XLS', icon: <FiUploadCloud className='text-[1.3rem] text-subtitle' /> },
	{ id: nanoid(), text: 'Delete product', icon: <MdDelete className='text-[red] text-[1.3rem]' /> },
];

export default function AllProducts() {
	//  hooks render products card
	const [verticalCard, setVerticalCard] = useState(false);
	const [array, setArray] = useState<string[]>([]);

	//  dumy data
	const products: Product[] = [
		{
			id: '1',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 10,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '2',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '3',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '4',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '5',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
	];

	return (
		<div className=' container mx-auto my-[0.8rem]'>
			<div className=' flex flex-col '>
				{/*  top section */}
				<TopSection verticalCard={verticalCard} setVerticalCard={setVerticalCard} />

				{/*  table and vertical cards section section */}
				{!verticalCard ? (
					<AllProductsTable settingMenus={settingMenus} array={array} setArray={setArray} products={products} />
				) : (
					<VerticalproductsCard settingMenus={settingMenus} array={array} setArray={setArray} products={products} />
				)}
			</div>
		</div>
	);
}
