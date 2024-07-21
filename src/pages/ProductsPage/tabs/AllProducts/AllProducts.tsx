import { useEffect, useMemo, useState } from 'react';

import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';

import { initialProduct, Product, productSettingsMenu } from '../../_comp/data';
import AllProductsTable from './_comp/AllProductsTable';
import AllproductsVertical from './_comp/AllproductsVertical';
import TopSection from './_comp/TopSection';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getCategoriesTable } from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import { GlobalDialog } from 'src/app/components/shared';
import { SimpleProductForm } from '../_comp';
import MobileProductViews from '../../_mobile/MobileProductViews';
import useResponsive from 'src/app/utils/hooks/useResponsive';

const AllProducts: React.FC = () => {
	// State hooks
	const [verticalCard, setVerticalCard] = useState(false);
	const [array, setArray] = useState<string[]>([]);
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const [edit_product, setEdit_product] = useState<Product>(initialProduct());
	const { xs } = useResponsive();
	// Redux hooks
	const dispatch = useAppDispatch();
	const { allProducts, isLoading } = useAppSelector((state) => state.allProducts);
	const { categoriesTable } = useAppSelector((state) => state.categoriesTable);

	// Fetch products on component mount
	useMemo(() => {
		dispatch(getAllProductsTable());
		dispatch(getCategoriesTable());
	}, [dispatch]);
	const dialogStyle = {
		width: { lg: '1150px', md: '700px', xs: '375px' },
		height: { md: '45vh', xs: '90vh' },
	};
	const handleClose = (status: boolean) => {
		setOpenDialog(status);
		setEdit_product(initialProduct());
	};

	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/* Top section */}
				<TopSection
					setOpenDialog={setOpenDialog}
					verticalCard={verticalCard}
					setVerticalCard={setVerticalCard}
				/>

				{/* Render table or vertical cards section */}
				{!verticalCard ? (
					<AllProductsTable
						setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
						settingMenus={productSettingsMenu}
						array={array}
						setArray={setArray}
						products={allProducts}
						isLoading={isLoading}
					/>
				) : (
					<AllproductsVertical
						setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
						settingMenus={productSettingsMenu}
						array={array}
						setArray={setArray}
						products={allProducts}
					/>
				)}

				{/* Render mobile views for small screens */}
				{xs && (
					<div className='responsive_pages '>
						{allProducts?.length > 0 &&
							allProducts?.map((product: Product) => (
								<MobileProductViews
								setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
									key={product.name}
									product={product}
									settingMenus={productSettingsMenu}
								/>
							))}
					</div>
				)}
			</div>
			<GlobalDialog
				openDialog={openDialog}
				handleClose={() => handleClose(false)}
				style={dialogStyle}
			>
				<SimpleProductForm
					edit_product={edit_product}
					handleClose={() => handleClose(false)}
					categoriesTable={categoriesTable}
				/>
			</GlobalDialog>
		</div>
	);
};

export default AllProducts;
