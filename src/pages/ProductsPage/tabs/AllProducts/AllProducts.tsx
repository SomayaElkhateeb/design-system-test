import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { MobileProductViews } from 'src/app/components/optimized';
import { Product } from 'src/app/interface/ProductInterface';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { AnalyticsIcon, CopyIcon, OrdersIcon, RemoveIcon } from 'src/app/utils/icons';
// =======================
import AllProductsTable from './_comp/AllProductsTable';
import TopSection from './_comp/TopSection';
import AllproductsVertical from './_comp/AllproductsVertical';

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
	{ id: nanoid(), text: 'Delete product', icon: <RemoveIcon className='fill-error' /> },
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

	// redux
	const dispatch = useDispatch();
	const { isLoading, allProducts, error } = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(getAllProductsTable());
	}, [dispatch]);

	const { xs } = useResponsive();

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
					{allProducts?.map((product) => (
						<MobileProductViews settingMenus={settingMenus} key={product.name} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
