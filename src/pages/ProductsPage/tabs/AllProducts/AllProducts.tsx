import { useEffect, useMemo, useState } from 'react';

import {
	deleteProductAction,
	getAllProductsTable,
} from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';

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
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { useTranslation } from 'react-i18next';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';

const AllProducts: React.FC = () => {
	// State hooks
	const { t } = useTranslation();
	const [verticalCard, setVerticalCard] = useState(false);
	const [array, setArray] = useState<string[]>([]);
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const [edit_product, setEdit_product] = useState<Product>(initialProduct());
	const { xs } = useResponsive();
	const { language } = useLanguage();
	const dispatch = useAppDispatch();

	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

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
				? a?.ar?.name.localeCompare(b?.ar?.name)
				: a?.en?.name.localeCompare(b?.en?.name),
		'Name Z to A': (a: Product, b: Product) =>
			language === 'ar'
				? b?.ar?.name.localeCompare(a?.ar?.name)
				: b?.en?.name.localeCompare(a?.en?.name),
	};
	const { arrangedData: ProductsArrangedData } = UseCustomTableSorting<Product>(
		sortFunctions,
		allProducts,
		productSortMenu?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);

	//  handel deleteItem
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();
	// Delete customer

	const handelDeleteProduct = () => {
		dispatch(deleteProductAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getAllProductsTable());
			}
		});
	};
	useMemo(() => {
		switch (selectedOption) {
			case 'Delete product':
				handelOpenDialog();
				setSelectedOption('');
				break;
		}
	}, [selectedOption]);
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
				!xs && (	<AllProductsTable
						handelId={handelId}
						setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
						array={array}
						setArray={setArray}
						products={ProductsArrangedData}
						isLoading={isLoading}
					>
						<ThreeDotsButton
							sortMenus={productSettingsMenu}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</AllProductsTable>
				)
				) : (
					!xs && (
					<AllproductsVertical
						setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
						handelId={handelId}
						array={array}
						setArray={setArray}
						products={ProductsArrangedData}
					>
						<ThreeDotsButton
							sortMenus={productSettingsMenu}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</AllproductsVertical>
					)
				
				)}

				{/* Render mobile views for small screens */}
				{xs && (
					<div className='responsive_pages '>
						{ProductsArrangedData?.length > 0 &&
							ProductsArrangedData?.map((product: Product) => (
								<MobileProductViews
									handelId={handelId}
									setEdit_product={setEdit_product}
									setOpenDialog={setOpenDialog}
									key={product.name}
									product={product}
								>
									<ThreeDotsButton
										sortMenus={productSettingsMenu}
										selectedOption={selectedOption}
										handelSelect={handleSelect}
									/>
								</MobileProductViews>
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

			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteProduct}
				/>
			)}
		</div>
	);
};

export default AllProducts;
