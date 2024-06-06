//  componenet will be used in customers page
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import ActionsComp from '../../optimized/Buttons/ActionsComp';
import { Button } from '../../optimized';
import { IoIosAddCircle } from 'react-icons/io';
import CustomersGroupTable from './CustomersGroupTable';
import { customers } from './CustomersTable';
import CustomersComponenet from './ResponsiveSmallMedia/CustomersComponent';
import { RemoveIcon } from 'src/app/utils/icons';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from '../../optimized/Buttons/AddButtonMobile';

export default function CustomersGroups() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { xs } = useResponsive();
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
		{ id: nanoid(), text: 'Remove group', icon: <RemoveIcon className='fill-error' /> },
	];

	return (
		<div className='flex-col-top-section-pages'>
			{/*  top section */}
			<div className='topTable'>
				{/*  add customers button */}
				<Button
					variant='primary'
					LeftIcon={IoIosAddCircle}
					onClick={() => {
						navigate('/customers/addGroupCustomer');
					}}
				>
					{t('Add New Group')}
				</Button>
				{/*  case of small media */}
				{xs && <AddButtonMobile path='/customers/addGroupCustomer' />}
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
			<div className='responsive_pages'>
				{customers?.map((e, i) => (
					<CustomersComponenet
						id={e.id}
						settingMenus={settingMenus}
						key={i}
						firstName={e.first_name}
						lastName={e.last_name}
						email={e.email}
					/>
				))}
			</div>
		</div>
	);
}
