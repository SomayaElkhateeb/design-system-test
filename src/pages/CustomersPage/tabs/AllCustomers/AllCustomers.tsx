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
import FilterOrdersComponent from 'src/app/components/page/Orders/FilterOrder/FilterOrdersComponent';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { AnalyticsIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';

import CustomersTable, {
	customers,
} from 'src/pages/CustomersPage/_comp/CustomersTables/CustomersTable';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';

//  componenet will be used in customers page
export default function AllCustomers() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { xs } = useResponsive();
	//  custom hook
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
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

	const ActionsMenus = [
		{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
		{ id: nanoid(), text: 'Export customers', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import customers', icon: <FiUploadCloud className='iconClass' /> },
	];
	const settingMenus = [
		{ id: nanoid(), text: 'Customer report', icon: <AnalyticsIcon className='fill-subtitle' /> },
		{
			id: nanoid(),
			text: 'Delete customer',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

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
					{/*  case of small media */}
					{xs && <AddButtonMobile path='/customers/addCustomer' />}
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
				<CustomersTable settingMenus={settingMenus} />

				{/*  case of small media */}
				<div className='responsive_pages'>
					{customers?.map((e, i) => (
						<CustomersComponenet
							id={e.id}
							path='customers'
							settingMenus={settingMenus}
							key={i}
							firstName={e.first_name}
							lastName={e.last_name}
							email={e.email}
						/>
					))}
				</div>
			</div>

			{/* open filter drawer */}
			{openDrawer && (
				<FilterOrdersComponent openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
			)}
		</>
	);
}
