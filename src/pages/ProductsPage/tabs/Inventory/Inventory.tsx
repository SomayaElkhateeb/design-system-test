import { useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';
import InventoryTable from 'src/pages/ProductsPage/tabs/Inventory/_comp/InventoryTable';
import TopSectionInventoryTable from 'src/pages/ProductsPage/tabs/Inventory/_comp/TopSectionInventoryTable';
import {
	deleteInventoryAction,
	getInventoryTable,
} from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { useTranslation } from 'react-i18next';
import { LiaTrashAlt } from 'react-icons/lia';
import { AnalyticsIcon, OrdersIcon, EditIcon } from 'src/app/utils/icons';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import { InventoryInterface } from 'src/app/interface/InventoryInterface';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { useNavigate } from 'react-router-dom';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';
export default function Inventory() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	//  selectors
	const { inventory, isLoading } = useAppSelector((state) => state.inventory);

	useEffect(() => {
		dispatch(getInventoryTable());
	}, [dispatch]);

	//  handel sorting

	const sortFunctions = {
		'Name A to Z': (a: InventoryInterface, b: InventoryInterface) => a.name.localeCompare(b.name),
		'Name Z to A': (a: InventoryInterface, b: InventoryInterface) => b.name.localeCompare(a.name),
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
	const { arrangedData: InventoriesArrangedData } = UseCustomTableSorting<InventoryInterface>(
		sortFunctions,
		inventory,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);

	//  handel delete inventory

	// body
	const InventoryMenu = [
		{ id: nanoid(), text: t('Edit Inventory'), icon: <EditIcon className='iconClass' /> },

		{ id: nanoid(), text: t('Inventory report'), icon: <AnalyticsIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Inventory products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete Inventory'),
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
	const handelDeleteInventory = () => {
		dispatch(deleteInventoryAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getInventoryTable());
			}
		});
	};
	useMemo(() => {
		switch (selectedOption) {
			case t('Delete Inventory'):
				handelOpenDialog();
				setSelectedOption('');
				break;
			case t('Edit Inventory'):
				navigate(`addInventory?id=${custom_Id}`);
				setSelectedOption('');
				break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<div className='custom_container'>
			<div className='flex-col-global '>
				{/*  top section */}
				<TopSectionInventoryTable
					selectedOption={selectedOption}
					handleSelect={handleSelect}
					sortMenus={sortMenus}
				/>

				{/*  table */}

				<InventoryTable
					handelId={handelId}
					inventory={InventoriesArrangedData}
					isLoading={isLoading}
				>
					<ThreeDotsButton
						sortMenus={InventoryMenu}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				</InventoryTable>

				{xs && <AddButtonMobile onClick={() => navigate('addInventory')} />}
			</div>
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteInventory}
				/>
			)}
		</div>
	);
}
