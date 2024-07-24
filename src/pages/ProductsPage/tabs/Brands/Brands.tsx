import { nanoid } from 'nanoid';
import { useEffect, useMemo, useState } from 'react';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import BrandsTable from 'src/pages/ProductsPage/tabs/Brands/_comp/BrandsTable';
import TopSectionBrandsTable from 'src/pages/ProductsPage/tabs/Brands/_comp/TopSectionBrandsTable';
import {
	deleteAllBrandsAction,
	deleteBrandAction,
	getBrandsTable,
	getExportBrands,
} from 'src/app/store/slices/productsPage/brands/brandsAsyncThunks';
import { CopyIcon, AnalyticsIcon, OrdersIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { useTranslation } from 'react-i18next';
import AddBrandForm from './_comp/AddBrandForm';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import toast from 'react-hot-toast';
import ActionHandler from 'src/app/utils/ActionMethods';

export default function Brands() {
	// hooks
	const [openAddOrUpdateDialog, setOpenAddOrUpdateDialog] = useState(false);
	const [Edit_id, setEdit_id] = useState('');
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const { xs } = useResponsive();

	const { language } = useLanguage();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	//  selectors
	const { brands, isLoading } = useAppSelector((state) => state.brands);
	const { allProducts } = useAppSelector((state) => state.allProducts);
	useEffect(() => {
		dispatch(getBrandsTable());
		dispatch(getAllProductsTable());
	}, [dispatch]);

	const brandsSettingMenus = [
		{ id: nanoid(), text: 'Copy brand link', icon: <CopyIcon className='fill-subtitle' /> },
		{ id: nanoid(), text: 'brand report', icon: <AnalyticsIcon className='fill-subtitle' /> },
		{ id: nanoid(), text: 'brand products', icon: <OrdersIcon className='fill-subtitle' /> },

		{
			id: nanoid(),
			text: 'Delete brand',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	//  handel delete Item
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();
	// Delete customer

	const handelDeleteBrand = () => {
		dispatch(deleteBrandAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getBrandsTable());
			}
		});
	};
	let brandsIds = brands?.map((e) => e?.id.toString()).join(',');
	useMemo(() => {
		switch (selectedOption) {
			case 'Delete brand':
				handelOpenDialog();
				setSelectedOption('');
				break;
			case 'Export brands':
				dispatch(getExportBrands()).then((response: any) => {
					ActionHandler.exportToExcelFromApi(response.payload,"brands");
				});
				setSelectedOption('');
				break;

			case 'Delete all brands':
				brands?.length > 0
					? dispatch(deleteAllBrandsAction({ indexes: brandsIds })).then((promiseResponse: any) => {
							if ((promiseResponse.payload.code = 200)) {
								dispatch(getBrandsTable());
							}
					  })
					: toast.error('There are no data to delete it');
				setSelectedOption('');
				break;
		}
	}, [selectedOption]);

	//  close add dialog
	const handleCloseAddDialog = () => {
		setEdit_id('');
		setOpenAddOrUpdateDialog(false);
	};

	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: BrandsInterface, b: BrandsInterface) =>
			language === 'ar' ? a.name_ar.localeCompare(b.name_ar) : a.name_en.localeCompare(b.name_en),
		'Name Z to A': (a: BrandsInterface, b: BrandsInterface) =>
			language === 'ar' ? b.name_ar.localeCompare(a.name_ar) : b.name_en.localeCompare(a.name_en),
	};
	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		// { id: nanoid(), text: 'SKU Ascending' },
		// { id: nanoid(), text: 'SKU Descending' },
		// { id: nanoid(), text: 'Price Low in first' },
		// { id: nanoid(), text: 'Price High in first' },
		// { id: nanoid(), text: 'Date Added' },
		// { id: nanoid(), text: 'Date modified' },
	];
	const { arrangedData: BrandsArrangedData } = UseCustomTableSorting<BrandsInterface>(
		sortFunctions,
		brands,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);

	return (
		<div className='custom_container'>
			<div className='flex-col-global '>
				{/*  top section */}
				<TopSectionBrandsTable
					selectedOption={selectedOption}
					handleSelect={handleSelect}
					sortMenus={sortMenus}
					setOpenAddOrUpdateDialog={setOpenAddOrUpdateDialog}
				/>

				{/*  table  */}
				{!xs && (
					<BrandsTable
						Edit_id={Edit_id}
						setEdit_id={setEdit_id}
						setOpenAddOrUpdateDialog={setOpenAddOrUpdateDialog}
						handelId={handelId}
						brands={BrandsArrangedData}
						isLoading={isLoading}
					>
						<ThreeDotsButton
							sortMenus={brandsSettingMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</BrandsTable>
				)}
				{/*  case of small media */}
				{xs && (
					<div className='responsive_pages'>
						{BrandsArrangedData?.map((e, i) => (
							<CustomersComponenet
								handelId={handelId}
								noAvatar
								id={e.id}
								key={i}
								firstName={language === 'ar' ? e.name_ar : e.name_en}
								email={language === 'ar' ? e.description_ar : e.description_en}
								imageUrl={e.image_url}
							>
								<ThreeDotsButton
									sortMenus={brandsSettingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
							</CustomersComponenet>
						))}
						<AddButtonMobile onClick={() => setOpenAddOrUpdateDialog(true)} />
					</div>
				)}
				{openDeleteDialog && (
					<PopupDelete
						open={openDeleteDialog}
						onClose={handelCloseDeleteDialog}
						title={t('Delete Item')}
						subTitle={t('Do You Want To Delete This Item')}
						onDelete={handelDeleteBrand}
					/>
				)}
				{openAddOrUpdateDialog && (
					<AddBrandForm
						setEdit_id={setEdit_id}
						Edit_id={Edit_id}
						allProducts={allProducts}
						openDialog={openAddOrUpdateDialog}
						handleClose={handleCloseAddDialog}
					/>
				)}
			</div>
		</div>
	);
}
