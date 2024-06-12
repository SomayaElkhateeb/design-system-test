import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import { nanoid } from 'nanoid';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import { RemoveIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';

import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import AddBrandItem from '../../Barnds/_comp/AddBrandItem';

export default function TopSectionCategoriesTable({ title }: { title: string }) {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const [openDialog, setOpenDialog] = useState(false);
	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: t('Name A to Z') },
		{ id: nanoid(), text: t('Name Z to A') },
		{ id: nanoid(), text: t('Date Added') },
		{ id: nanoid(), text: t('Date modified') },
	];

	const ActionsMenus = [
		{ id: nanoid(), text: t('Bulk edit'), icon: <FaRegEdit className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Export categories'),
			icon: <SiMicrosoftexcel className='iconClass' />,
		},
		{ id: nanoid(), text: t('Import categories'), icon: <FiUploadCloud className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete all categories'),
			icon: <RemoveIcon className='iconClass' />,
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
					{/*  left dropdown */}

					{!xs && (
						<Button onClick={() => setOpenDialog(true)} variant='primary' LeftIcon={IoIosAddCircle}>
							{title}
						</Button>
					)}
					{xs && <AddButtonMobile onClick={() => setOpenDialog(true)} />}
					{/*  actions  arrange,... */}
					<div className='flex-row-global '>
						<ActionsComp
							sortMenus={sortMenus}
							ActionsMenus={ActionsMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
				</div>
				<hr />
			</div>

			{openDialog && <AddBrandItem openDialog={openDialog} handleClose={handleClose} />}
		</>
	);
}
