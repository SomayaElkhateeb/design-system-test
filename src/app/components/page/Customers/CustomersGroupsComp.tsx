//  componenet will be used in customers page
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import ActionsComp from './ActionsComp';
import { Button } from '../../optimized';
import { IoIosAddCircle } from 'react-icons/io';
import CustomersGroupTable from './CustomersGroupTable';
export default function CustomersGroups() {
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

	return (
		<div className=' flex flex-col gap-[1rem]'>
			{/*  top section */}
			<div className='flex justify-between items-center'>
				{/*  add customers button */}
				<Button
					variant='primary'
					LeftIcon={IoIosAddCircle}
					onClick={() => {
						navigate('/addCustomer');
					}}
				>
					{t('Add New Group')}
				</Button>

				{/*  arrange,... */}
				<ActionsComp sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
			</div>
			<hr />

			{/*  customers table */}
			<CustomersGroupTable />
		</div>
	);
}
