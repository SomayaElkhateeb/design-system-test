//  componenet will be used in customers page
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import CustomersGroupTable from 'src/pages/CustomersPage/_comp/CustomersTables/CustomersGroupTable';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { LiaTrashAlt } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getCustomersGroupTable } from 'src/app/store/slices/customersPage/CustomersGroup/customersGroupTableAsyncThunks';
import { useEffect } from 'react';

export default function CustomersGroups() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const dispatch = useAppDispatch();
	//  selectors
	const { customersGroup } = useAppSelector((state) => state.customersGroup);
	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		{ id: nanoid(), text: 'Sales Ascending' },
		{ id: nanoid(), text: 'Sales Descending' },
		{ id: nanoid(), text: 'Expenses Ascending' },
		{ id: nanoid(), text: 'Expenses Descending' },
		{ id: nanoid(), text: 'Net profit Ascending' },
		{ id: nanoid(), text: 'Net profit Descending' },
	];
	const settingMenus = [
		{ id: nanoid(), text: 'Add discount', icon: <p className='text-[1.3rem]'>%</p> },
		{ id: nanoid(), text: 'Remove group', icon: <LiaTrashAlt size='28' className='fill-error' /> },
	];

	useEffect(() => {
		dispatch(getCustomersGroupTable());
	}, [dispatch]);

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
			<CustomersGroupTable settingMenus={settingMenus} />

			{/*  case of small media */}
			{xs && (
				<div className='responsive_pages'>
					{customersGroup?.map((e, i) => (
						<CustomersComponenet
							id={e.id}
							settingMenus={settingMenus}
							key={i}
							firstName={e.name}
							customersCount={e.customers_count}
							// lastName={e.name}
							email={e.description}
						/>
					))}
					<AddButtonMobile path='/customers/addGroupCustomer' />
				</div>
			)}
		</div>
	);
}
