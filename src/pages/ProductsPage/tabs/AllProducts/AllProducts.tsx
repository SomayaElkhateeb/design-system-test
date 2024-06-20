import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { MobileProductViews } from 'src/app/components/optimized';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { AnalyticsIcon, CopyIcon, OrdersIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';

// =======================
import AllProductsTable from './_comp/AllProductsTable';
import TopSection from './_comp/TopSection';
import AllproductsVertical from './_comp/AllproductsVertical';
import { useAppDispatch, useAppSelector } from 'src/app/store';

export interface Product {
	name: string;
	category: string;
	option?: number;
	imageUrl: string;
	SKU?: string;
	id?: string;
	quantity: number;
	price: number;
}
//  setting menus for setting button action and will be used in brands section page
export const settingMenus = [
	{ id: nanoid(), text: 'Copy product link', icon: <CopyIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product report', icon: <AnalyticsIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product orders', icon: <OrdersIcon className='fill-subtitle' /> },
	{
		id: nanoid(),
		text: 'Export product orders XLS',
		icon: <FiUploadCloud className='iconClass' />,
	},
	{ id: nanoid(), text: 'Delete product', icon: <LiaTrashAlt size='28' className='fill-error' /> },
];

//  dumy data
export const products: Product[] = [
	{
		id: '1',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 10,
		price: 1000,
		imageUrl: 'images/product.png',
	},
	{
		id: '2',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 0,
		price: 1000,
		imageUrl: 'images/product.png',
	},
	{
		id: '3',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 0,
		price: 1000,
		imageUrl: 'images/product.png',
	},
	{
		id: '4',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 0,
		price: 1000,
		imageUrl: 'images/product.png',
	},
	{
		id: '5',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 0,
		price: 1000,
		imageUrl: 'images/product.png',
	},
];
export default function AllProducts() {
	//  hooks render products card
	const [verticalCard, setVerticalCard] = useState(false);
	const [array, setArray] = useState<string[]>([]);
	const { xs } = useResponsive();

	// redux
	const dispatch = useAppDispatch();
	const { allProducts, isLoading, error } = useAppSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(getAllProductsTable());
	}, [dispatch]);

	// if (error) return <div>Error: {error}</div>;

	return (
		<div className='custom_container'>
			<div className='flex-col-global '>
				{/*  top section */}
				<TopSection verticalCard={verticalCard} setVerticalCard={setVerticalCard} />

				{/*  table and vertical cards section section */}
				{!verticalCard ? (
					<AllProductsTable
						settingMenus={settingMenus}
						array={array}
						setArray={setArray}
						products={allProducts}
						isLoading={isLoading}
					/>
				) : (
					<AllproductsVertical
						settingMenus={settingMenus}
						array={array}
						setArray={setArray}
						products={allProducts}
					/>
				)}

				{/*  case of small media only  */}
				<div className='sm:hidden grid gap-2 '>
					{allProducts?.map((product: Product) => (
						<MobileProductViews settingMenus={settingMenus} key={product.name} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
