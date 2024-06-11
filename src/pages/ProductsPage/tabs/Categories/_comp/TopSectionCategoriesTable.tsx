import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { IoIosAddCircle } from 'react-icons/io';
import { SiMicrosoftexcel } from 'react-icons/si';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { RemoveIcon } from 'src/app/utils/icons';
import AddBrandItem from '../../Barnds/_comp/AddBrandItem';

export default function TopSectionCategoriesTable() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const [openDialog, setOpenDialog] = useState(false);
	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		{ id: nanoid(), text: 'Date Added' },
		{ id: nanoid(), text: 'Date modified' },
	];

	const ActionsMenus = [
		{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
		{ id: nanoid(), text: 'Export categories', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import categories', icon: <FiUploadCloud className='iconClass' /> },
		{
			id: nanoid(),
			text: 'Delete all categories',
			icon: <RemoveIcon className='fill-error' />,
		},
	];

	//  close add brand dialog
	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<div className='flex-col-top-section-pages'>
				<div className='topTable'>
					{/*  left dropdown */}

					{!xs && (
						<Button onClick={() => setOpenDialog(true)} variant='primary' LeftIcon={IoIosAddCircle}>
							{t('Add Category')}
						</Button>
					)}
					{xs && <AddButtonMobile onClick={() => setOpenDialog(true)} />}
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
				<hr />
			</div>

			{openDialog && <AddBrandItem openDialog={openDialog} handleClose={handleClose} />}
		</>
	);
}
