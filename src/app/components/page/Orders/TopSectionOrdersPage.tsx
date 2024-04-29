import { Button } from 'src/app/components/optimized';

import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';

import { nanoid } from 'nanoid';

import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';

import { MdDelete } from 'react-icons/md';
import ActionsComp from '../../optimized/Buttons/ActionsComp';
import { useNavigate } from 'react-router-dom';
export default function TopSectionOrdersPage({
	addButton,
	path,
}: {
	addButton: string;
	path: string;
}) {
	//  hooks
	const navigate = useNavigate();
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
		{ id: nanoid(), text: 'Export Orders', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import Orders', icon: <FiUploadCloud className='iconClass' /> },
	];

	return (
		<div className='flex-col-top-section-pages'>
			<div className='flex-row-global justify-between'>
				{/*  left dropdow */}

				<Button onClick={() => navigate(path)} variant='primary' LeftIcon={IoIosAddCircle}>
					{addButton}
				</Button>
				{/*  actions filter arrange,... */}
				<div className='flex-row-global  gap-[1.2rem]'>
					<ActionsComp
						filterMenus={sortMenus}
						sortMenus={sortMenus}
						ActionsMenus={ActionsMenus}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				</div>
			</div>
			<hr />
		</div>
	);
}
