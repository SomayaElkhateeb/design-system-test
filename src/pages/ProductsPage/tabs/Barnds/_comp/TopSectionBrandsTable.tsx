import { Button } from 'src/app/components/optimized';

import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';

import { nanoid } from 'nanoid';

import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';

import { useState } from 'react';
import AddBrandForm from './AddBrandForm';
import { LiaTrashAlt } from 'react-icons/lia';

import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';
export default function TopSectionBrandsTable() {
	//  hooks
	const [openDialog, setOpenDialog] = useState(false);
	const { xs } = useResponsive();

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
		{ id: nanoid(), text: 'Export brands', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import brands', icon: <FiUploadCloud className='iconClass' /> },
		{
			id: nanoid(),
			text: 'Delete all brands',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	//  close add brand dialog
	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<div className='flex-col-global'>
				<div className='topTable'>
					{/*  left dropdow */}

					{!xs && (
						<Button onClick={() => setOpenDialog(true)} variant='primary' LeftIcon={IoIosAddCircle}>
							{t('Add Brand')}
						</Button>
					)}

					{/*  actions  arrange,... */}
					<div className='flex-row-global  gap-[1.2rem]'>
						<ActionsComp
							sortMenus={sortMenus}
							ActionsMenus={ActionsMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
					{xs && <AddButtonMobile  onClick={() => setOpenDialog(true)} />}
				</div>

				<hr />
			</div>

			{openDialog && <AddBrandForm openDialog={openDialog} handleClose={handleClose} />}
		</>
	);
}
