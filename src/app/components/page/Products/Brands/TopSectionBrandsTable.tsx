import { Button } from 'src/app/components/optimized';

import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';

import { nanoid } from 'nanoid';

import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import ActionsComp from '../../Customers/ActionsComp';
import { MdDelete } from 'react-icons/md';

export default function TopSectionBrandsTable() {
	//  hooks
	const { t } = useTranslation();

	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		{ id: nanoid(), text: 'SKU Ascending' },
		{ id: nanoid(), text: 'SKU Descending' },
		{ id: nanoid(), text: 'Price Low in first' },
		{ id: nanoid(), text: 'Price High in first' },
		{ id: nanoid(), text: 'Date Added' },
		{ id: nanoid(), text: 'Date modified' },
	];

	const ActionsMenus = [
		{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
		{ id: nanoid(), text: 'Export products', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import products', icon: <FiUploadCloud className='iconClass' /> },
		{ id: nanoid(), text: 'Delete all products', icon: <MdDelete className='text-[red] text-[1.2rem]' /> },
	];

	return (
		<div className='flex-row-global justify-between'>
			{/*  left dropdow */}

			<Button variant='primary' LeftIcon={IoIosAddCircle}>
				{t('Add Brand')}
			</Button>

			{/*  actions  arrange,... */}
			<div className='flex-row-global  gap-[1.2rem]'>
				<ActionsComp
					sortMenus={sortMenus}
					ActionsMenus={ActionsMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>
		</div>
	);
}
