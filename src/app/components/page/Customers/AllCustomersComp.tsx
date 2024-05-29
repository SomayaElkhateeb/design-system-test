import { useNavigate } from 'react-router-dom';
import { Button } from '../../optimized';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import ActionsComp from '../../optimized/Buttons/ActionsComp';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import CustomersTable from './CustomersTable';

//  componenet will be used in customers page
export default function AllCustomers() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();

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

	const ActionsMenus = [
		{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
		{ id: nanoid(), text: 'Export customers', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import customers', icon: <FiUploadCloud className='iconClass' /> },
	];

	return (
		<div className=' flex flex-col gap-[1rem]'>
			{/*  top section */}
			<div className='topTable'>
				{/*  add customers button */}
				<Button
					variant='primary'
					LeftIcon={IoIosAddCircle}
					onClick={() => {
						navigate('/customers/addCustomer');
					}}
				>
					{t('Add New Customer')}
				</Button>

				{/*  actions filter arrange,... */}
				<ActionsComp
					filterMenus={sortMenus}
					sortMenus={sortMenus}
					ActionsMenus={ActionsMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>
			<hr />

			{/*  customers table */}
			<CustomersTable />
		</div>
	);
}
