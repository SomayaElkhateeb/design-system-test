//  componenet will be used in customers page
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import CustomersGroupTable from 'src/pages/CustomersPage/tabs/CustomersGroups/_comp/CustomersGroupTable';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { LiaTrashAlt } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	deleteCustomerGroupAction,
	getCustomersGroupTable,
} from 'src/app/store/slices/customersPage/CustomersGroup/customersGroupTableAsyncThunks';
import { useEffect, useMemo } from 'react';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import { CustomerGroupInterface } from 'src/app/interface/CustomerGroupInterface';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';

export default function CustomersGroups() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const dispatch = useAppDispatch();
	//  selectors
	const { customersGroup } = useAppSelector((state) => state.customersGroup);

	//    arrange action
	//  custom hook for select arrang item
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		// { id: nanoid(), text: 'Sales Ascending' },
		// { id: nanoid(), text: 'Sales Descending' },
		// { id: nanoid(), text: 'Expenses Ascending' },
		// { id: nanoid(), text: 'Expenses Descending' },
		// { id: nanoid(), text: 'Net profit Ascending' },
		// { id: nanoid(), text: 'Net profit Descending' },
	];
	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: CustomerGroupInterface, b: CustomerGroupInterface) =>
			a.name.localeCompare(b.name),
		'Name Z to A': (a: CustomerGroupInterface, b: CustomerGroupInterface) =>
			b.name.localeCompare(a.name),
	};
	const { arrangedData: CustomersGroupArrangedData } =
		UseCustomTableSorting<CustomerGroupInterface>(
			sortFunctions,
			customersGroup,
			sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
		);

	// /////////////////////////    three dots actions
	const settingMenus = [
		{ id: nanoid(), text: 'Add discount', icon: <p className='text-[1.3rem]'>%</p> },
		{ id: nanoid(), text: 'Remove group', icon: <LiaTrashAlt size='28' className='fill-error' /> },
	];

	useEffect(() => {
		dispatch(getCustomersGroupTable());
	}, [dispatch]);

	//  custom hook for select setting item
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();

	// Delete customer Group

	const handelDeleteCustomerGroup = () => {
		dispatch(deleteCustomerGroupAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getCustomersGroupTable());
			}
		});
	};
	useMemo(() => {
		switch (selectedOption) {
			case 'Remove group':
				handelOpenDialog();
				setSelectedOption('');
				break;
			case 'Add discount':
				setSelectedOption('');
				break;
		}
	}, [selectedOption]);

	return (
		<div className='flex-col-global'>
			{/*  top section */}
			<div className='topTable'>
				{/*  add customers button */}
				{!xs && (
					<Button
						variant='primary'
						LeftIcon={IoIosAddCircle}
						onClick={() => {
							navigate('/customers/addGroupCustomer');
						}}
					>
						{t('Add New Group')}
					</Button>
				)}

				{/*  arrange,... */}
				<ActionsComp
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>
			<hr />

			{/*  customers table */}
			<CustomersGroupTable
				handelId={handelId}
				CustomersGroupArrangedData={CustomersGroupArrangedData}
			>
				<ThreeDotsButton
					sortMenus={settingMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</CustomersGroupTable>

			{/*  case of small media */}
			{xs && (
				<div className='responsive_pages'>
					{customersGroup?.map((e, i) => (
						<CustomersComponenet
							handelId={handelId}
							id={e.id}
							key={i}
							firstName={e.name}
							customersCount={e.customers_count}
							group
							path='customers/addGroupCustomer'
							email={e.description}
						>
							<ThreeDotsButton
								sortMenus={settingMenus}
								selectedOption={selectedOption}
								handelSelect={handleSelect}
							/>
						</CustomersComponenet>
					))}
					<AddButtonMobile path='/customers/addGroupCustomer' />
				</div>
			)}

			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteCustomerGroup}
				/>
			)}
		</div>
	);
}
