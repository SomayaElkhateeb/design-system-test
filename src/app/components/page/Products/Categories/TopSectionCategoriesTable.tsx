import { Button, Menu } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import { nanoid } from 'nanoid';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaAngleDown, FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import ActionsComp from '../../../optimized/Buttons/ActionsComp';

import AddBrandItem from '../Brands/AddBrandItem';
import { useState } from 'react';
import { AnalyticsIcon, CopyIcon, OrdersIcon, RemoveIcon } from 'src/app/utils/icons';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import PopoverComponenet from 'src/app/components/optimized/Popover/Popover';

export default function TopSectionCategoriesTable() {
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
	const collapseMenus = [
		{ id: nanoid(), text: t('Copy category link'), icon: <CopyIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Category report'), icon: <AnalyticsIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Category products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete category'),
			icon: <RemoveIcon className='iconClass' />,
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
					{!xs && (
						<Button onClick={() => setOpenDialog(true)} variant='primary' LeftIcon={IoIosAddCircle}>
							{t('Add Category')}
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

						<PopoverComponenet
							button={
								<>
									<Button variant='secondary' LeftIcon={FaAngleDown}>
										{t('collapse all')}
									</Button>
								</>
							}
						>
							<Menu
								options={collapseMenus}
								selectedOption={selectedOption}
								onSelect={handleSelect}
							/>
						</PopoverComponenet>
					</div>
				</div>
				<hr />
			</div>

			{openDialog && <AddBrandItem openDialog={openDialog} handleClose={handleClose} />}
		</>
	);
}
