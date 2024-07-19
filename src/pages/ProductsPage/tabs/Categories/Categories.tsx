import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { LiaTrashAlt } from 'react-icons/lia';
import { AnalyticsIcon, CopyIcon, OrdersIcon, EditIcon } from 'src/app/utils/icons';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import { CategoryTable } from './_comp/CategoryTable';
import TopSectionCategoriesTable from './_comp/TopSectionCategoriesTable';
import { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	deleteCategoryAction,
	getCategoriesTable,
	getCategoryInfo,
} from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import AddCategoryForm from './_comp/AddCategoryForm';

import useLanguage from 'src/app/utils/hooks/useLanguage';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';

export default function Categories() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const [openDialog, setOpenDialog] = useState(false);
	const [Edit_id, setEdit_id] = useState('');
	const { language } = useLanguage();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	// redux
	const dispatch = useAppDispatch();
	const { categoriesTable, isLoading } = useAppSelector((state) => state.categoriesTable);
	const { allProducts } = useAppSelector((state) => state.allProducts);
	useEffect(() => {
		dispatch(getCategoriesTable());
		dispatch(getAllProductsTable());
	}, [dispatch]);

	// body
	const CategoryMenu = [
		{ id: nanoid(), text: t('edit category'), icon: <EditIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Copy category link'), icon: <CopyIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Category report'), icon: <AnalyticsIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Category products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete category'),
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	//  close add brand dialog
	const handleClose = () => {
		setOpenDialog(false);
		setEdit_id('');
	};

	//  handel delete Item
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();
	const handelDeleteCategory = () => {
		dispatch(deleteCategoryAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getCategoriesTable());
			}
		});
	};

	useMemo(() => {
		switch (selectedOption) {
			case t('Delete category'):
				handelOpenDialog();
				setSelectedOption('');
				break;
			case t('edit category'):
				setOpenDialog(true);
				setEdit_id(custom_Id);
				dispatch(getCategoryInfo(custom_Id));
				setSelectedOption('');
				break;
		}
	}, [selectedOption, custom_Id]);
	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: CategoryInterface, b: CategoryInterface) =>
			language === 'ar' ? a.ar.name.localeCompare(b.ar.name) : a.en.name.localeCompare(b.en.name),
		'Name Z to A': (a: CategoryInterface, b: CategoryInterface) =>
			language === 'ar' ? b.ar.name.localeCompare(a.ar.name) : b.en.name.localeCompare(a.en.name),
	};
	const sortMenus = [
		{ id: nanoid(), text: t('Name A to Z') },
		{ id: nanoid(), text: t('Name Z to A') },
		// { id: nanoid(), text: t('Date Added') },
		// { id: nanoid(), text: t('Date modified') },
	];
	const { arrangedData: CategoriesArrangedData } = UseCustomTableSorting<CategoryInterface>(
		sortFunctions,
		categoriesTable,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);
	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionCategoriesTable
					selectedOption={selectedOption}
					handleSelect={handleSelect}
					sortMenus={sortMenus}
					setOpenDialog={setOpenDialog}
					title={t('Add Category')}
				/>

				{/* table */}

				<CategoryTable
					handelId={handelId}
					categoryData={CategoriesArrangedData}
					isLoading={isLoading}
				>
					<ThreeDotsButton
						sortMenus={CategoryMenu}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				</CategoryTable>

				{/*  case of small media */}
				{xs && (
					<div className='responsive_pages'>
						{CategoriesArrangedData?.map((e, i) => (
							<CustomersComponenet
								handelId={handelId}
								noAvatar
								id={e.id}
								key={i}
								firstName={language === 'ar' ? e.ar.name : e.en.name}
								email={language === 'ar' ? e.ar.description : e.en.description}
								imageUrl={e.image_url}
								path='/products/categories/SubCategories'
							>
								<ThreeDotsButton
									sortMenus={CategoryMenu}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
							</CustomersComponenet>
						))}
						<AddButtonMobile onClick={() => setOpenDialog(true)} />
					</div>
				)}
			</div>
			{openDialog && (
				<AddCategoryForm
					Edit_id={Edit_id}
					setEdit_id={setEdit_id}
					allProducts={allProducts}
					openDialog={openDialog}
					handleClose={handleClose}
				/>
			)}
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteCategory}
				/>
			)}
		</div>
	);
}
