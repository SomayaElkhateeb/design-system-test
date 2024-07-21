import { useEffect, useMemo, useState } from 'react';

import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';

import { initialProduct, Product, productSettingsMenu, productSortMenu } from '../../_comp/data';
import AllProductsTable from './_comp/AllProductsTable';
import AllproductsVertical from './_comp/AllproductsVertical';
import TopSection from './_comp/TopSection';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getCategoriesTable } from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import { GlobalDialog } from 'src/app/components/shared';
import { SimpleProductForm } from '../_comp';
import MobileProductViews from '../../_mobile/MobileProductViews';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import useLanguage from 'src/app/utils/hooks/useLanguage';

const AllProducts: React.FC = () => {
	// State hooks
	const [verticalCard, setVerticalCard] = useState(false);
	const [array, setArray] = useState<string[]>([]);
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const [edit_product, setEdit_product] = useState<Product>(initialProduct());
	const { xs } = useResponsive();
	const { language } = useLanguage();
	const dispatch = useAppDispatch();

	const { selectedOption, handleSelect } = useSelectBox();

	//  selectors
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

	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: Product, b: Product) =>
			language === 'ar'
				?  a?.ar?.name.localeCompare( b?.ar?.name)
				:  a?.en?.name.localeCompare( b?.en?.name),
		'Name Z to A': (a: Product, b: Product) =>
			language === 'ar'
				? b?.ar?.name.localeCompare(a?.ar?.name)
				:  b?.en?.name.localeCompare(a?.en?.name),
	};
	const { arrangedData: ProductsArrangedData } = UseCustomTableSorting<Product>(
		sortFunctions,
		allProducts,
		productSortMenu?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);

	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/* Top section */}
				<TopSection
					handleSelect={handleSelect}
					selectedOption={selectedOption}
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
						products={ProductsArrangedData}
						isLoading={isLoading}
					/>
				) : (
					<AllproductsVertical
						setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
						settingMenus={productSettingsMenu}
						array={array}
						setArray={setArray}
						products={ProductsArrangedData}
					/>
				)}

				{/* Render mobile views for small screens */}
				{xs && (
					<div className='responsive_pages '>
						{ProductsArrangedData?.length > 0 &&
							ProductsArrangedData?.map((product: Product) => (
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
