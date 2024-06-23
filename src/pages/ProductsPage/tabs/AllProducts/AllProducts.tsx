import { useEffect, useState } from 'react';
import { MobileProductViews } from 'src/app/components/optimized';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { getAllProducts } from 'src/app/store/slices/productsPage/allProducts/allProductsTableSlice';
import { Product, productSettingsMenu } from '../../_comp/data';
import AllProductsTable from './_comp/AllProductsTable';
import AllproductsVertical from './_comp/AllproductsVertical';
import TopSection from './_comp/TopSection';
import { useAppDispatch, useAppSelector } from 'src/app/store';

const AllProducts: React.FC = () => {
	// State hooks
	const [verticalCard, setVerticalCard] = useState(false);
	const [array, setArray] = useState<string[]>([]);

	// Redux hooks
	const dispatch = useAppDispatch();
	const { isLoading, allProducts } = useAppSelector(getAllProducts); // Adjust selector based on your slice name

	// Fetch products on component mount
	useEffect(() => {
		dispatch(getAllProductsTable());
	}, [dispatch]);

	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/* Top section */}
				<TopSection verticalCard={verticalCard} setVerticalCard={setVerticalCard} />

				{/* Render table or vertical cards section */}
				{!verticalCard ? (
					<AllProductsTable
						settingMenus={productSettingsMenu}
						array={array}
						setArray={setArray}
						products={allProducts}
						isLoading={isLoading}
					/>
				) : (
					<AllproductsVertical
						settingMenus={productSettingsMenu}
						array={array}
						setArray={setArray}
						products={allProducts}
					/>
				)}

				{/* Render mobile views for small screens */}
				<div className='sm:hidden grid gap-2 '>
					{allProducts?.map((product: Product) => (
						<MobileProductViews
							key={product.name}
							{...product}
							settingMenus={productSettingsMenu}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllProducts;
