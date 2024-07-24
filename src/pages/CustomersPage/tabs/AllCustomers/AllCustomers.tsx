import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { IoIosAddCircle } from 'react-icons/io';
import { SiMicrosoftexcel } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { AnalyticsIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';

import CustomersTable from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/CustomersTable';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect, useMemo, useState } from 'react';
import {
	deleteAllCustomersAction,
	deleteCustomerAction,
	getAllCustomersTable,
	getExportCustomers,
} from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import ActionHandler from 'src/app/utils/ActionMethods';
import FilterOrdersComponent from 'src/pages/OrdersPage/FilterOrder/FilterOrdersComponent';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';

//  componenet will be used in customers page
export default function AllCustomers() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const dispatch = useAppDispatch();
	//  custom hook
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	// selectors
	const { allCustomers } = useAppSelector((state) => state.allCustomer);
	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
	];

	const ActionsMenus = [
		{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
		{ id: nanoid(), text: 'Export customers', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import customers', icon: <FiUploadCloud className='iconClass' /> },
		{
			id: nanoid(),
			text: 'delete customers',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];
	const settingMenus = [
		{ id: nanoid(), text: 'Customer report', icon: <AnalyticsIcon className='fill-subtitle' /> },
		{
			id: nanoid(),
			text: 'Delete customer',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	useEffect(() => {
		dispatch(getAllCustomersTable());
	}, [dispatch]);

	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: CustomerInterface, b: CustomerInterface) => a.name.localeCompare(b.name),
		'Name Z to A': (a: CustomerInterface, b: CustomerInterface) => b.name.localeCompare(a.name),
	};
	const { arrangedData: CustomersArrangedData } = UseCustomTableSorting<CustomerInterface>(
		sortFunctions,
		allCustomers,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
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

	const handelDeleteCustomer = () => {
		dispatch(deleteCustomerAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getAllCustomersTable());
			}
		});
	};
	let allCustomersIds = allCustomers?.map((e) => e?.id.toString()).join(',');
	useMemo(() => {
		switch (selectedOption) {
			case 'Delete customer':
				handelOpenDialog();
				setSelectedOption('');
				break;
			case 'Customer report':
				setSelectedOption('');
				custom_Id && navigate(`/customers/${custom_Id}`);
				break;
			case 'Export customers':
				dispatch(getExportCustomers()).then((response: any) => {
					ActionHandler.exportToExcelFromApi(response.payload,"customers");
				});
				setSelectedOption('');
				break;
			case 'delete customers':
				dispatch(deleteAllCustomersAction({ indexes: allCustomersIds })).then((response: any) => {
					if (response.payload.code === 200) {
						dispatch(getAllCustomersTable());
					}
				});
				setSelectedOption('');
				break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<>
			<div className='flex-col-global'>
				{/* top section */}
				<div className='topTable'>
					{/* add customers button */}
					{!xs && (
						<Button
							variant='primary'
							LeftIcon={IoIosAddCircle}
							onClick={() => {
								navigate('/customers/addCustomer');
							}}
						>
							{t('Add New Customer')}
						</Button>
					)}

					{/*  actions filter arrange,... */}
					<ActionsComp
						HandelopenDrawer={HandelopenDrawer}
						filter
						sortMenus={sortMenus}
						ActionsMenus={ActionsMenus}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				</div>
				<hr />

				{/*  customers table case of not small media */}
				{!xs && (
					<CustomersTable handelId={handelId} CustomersArrangedData={CustomersArrangedData}>
						<ThreeDotsButton
							sortMenus={settingMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</CustomersTable>
				)}
				{/*  case of small media */}
				{xs && (
					<div className='responsive_pages'>
						{CustomersArrangedData?.length > 0 &&
							CustomersArrangedData?.map((e, i: number) => (
								<CustomersComponenet
									handelId={handelId}
									id={e.id}
									path='customers'
									key={i}
									firstName={e.first_name}
									lastName={e.last_name}
									email={e.email}
								>
									<ThreeDotsButton
										sortMenus={settingMenus}
										selectedOption={selectedOption}
										handelSelect={handleSelect}
									/>
								</CustomersComponenet>
							))}
						<AddButtonMobile path='/customers/addCustomer' />
					</div>
				)}
			</div>

			{/* open filter drawer */}
			{openDrawer && (
				<FilterOrdersComponent openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
			)}
			{/* openDeleteDialog */}
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteCustomer}
				/>
			)}
		</>
	);
}
