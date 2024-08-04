import useResponsive from 'src/app/utils/hooks/useResponsive';

import AllOrdersTableMobile from './_comp/AllOrdersTableMobile';
import AllOrdersTable from './_comp/AllOrdersTable';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import TopSectionOrdersPage from './_comp/TopSectionOrdersPage';
import { nanoid } from 'nanoid';
import { LiaTrashAlt } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	CancelOrder,
	getAllOrdersPageTable,
} from 'src/app/store/slices/ordersPage/allOrders/allOrdersAsyncThunks';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';

//  setting menus for setting button action
const settingMenus = [
	{ id: nanoid(), text: 'Cancel Order', icon: <LiaTrashAlt size='28' className='fill-error' /> },
];

export default function AllOrders() {
	//  hooks
	const { t } = useTranslation();
	const [array, setArray] = useState<string[]>([]);
	const { xs } = useResponsive();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	//redux
	const dispatch = useAppDispatch();
	const { allOrders, isLoading } = useAppSelector((state) => state.allOrders);

	useEffect(() => {
		dispatch(getAllOrdersPageTable());
	}, [dispatch]);

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

	const handelCancelOrder = () => {
		dispatch(CancelOrder({ id: custom_Id })).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getAllOrdersPageTable());
			}
		});
	};
	useMemo(() => {
		switch (selectedOption) {
			// case 'Bulk edit':
			// 	navigate('');
			// 	break;
			case 'Cancel Order':
				handelOpenDialog();
				setSelectedOption('');
				break;
			
			// case 'Export customers':
			// 	dispatch(getExportCustomers()).then((response: any) => {
			// 		ActionHandler.exportToExcelFromApi(response.payload, 'customers');
			// 	});
			// 	setSelectedOption('');
			// 	break;
			// case 'delete customers':
			// 	setSelectedOption('');
			// 	CustomersArrangedData?.length > 0
			// 		? dispatch(deleteAllCustomersAction({ indexes: allCustomersIds })).then(
			// 				(response: any) => {
			// 					if (response.payload.code === 200) {
			// 						dispatch(getAllCustomersTable());
			// 					}
			// 				},
			// 		  )
			// 		: toast.error('there are no customers');
			// 	break;
			// case 'Import customers':
			// 	setOpenExportDialog(true);
			// 	setSelectedOption('');
			// 	break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<div className='custom_container pt-5'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionOrdersPage
					selectedOption={selectedOption}
					handelSelect={handleSelect}
					addButton={t('Add Order')}
					path='/addOrder'
				/>

				{/*  table section */}

				{!xs && (
					<AllOrdersTable
						handelId={handelId}
						array={array}
						setArray={setArray}
						orders={allOrders}
						isLoading={isLoading}
					>
						<ThreeDotsButton
							sortMenus={settingMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</AllOrdersTable>
				)}

				{xs && (
					<div className='flex-col-global'>
						<AllOrdersTableMobile orders={allOrders} />
						<AddButtonMobile path='/order/addOrder' />
					</div>
				)}
			</div>
			{/* openDeleteDialog */}
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Cancel Order')}
					subTitle={t('Do You Want To Cancel This Order')}
					onDelete={handelCancelOrder}
				/>
			)}
		</div>
	);
}
