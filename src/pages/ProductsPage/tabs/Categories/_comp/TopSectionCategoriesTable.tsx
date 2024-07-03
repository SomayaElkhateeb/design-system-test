import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { LiaTrashAlt } from 'react-icons/lia';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddBrandForm from '../../Barnds/_comp/AddBrandForm';

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
			text: 'Delete all categories',
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
					{/*  left dropdown */}

					{!xs && (
						<Button onClick={() => setOpenDialog(true)} variant='primary' LeftIcon={IoIosAddCircle}>
							{title}
						</Button>
					)}
					{/*  actions  arrange,... */}
					<div className='flex-row-global '>
						<ActionsComp
							sortMenus={sortMenus}
							ActionsMenus={ActionsMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
					{xs && <AddButtonMobile onClick={() => setOpenDialog(true)} />}
				</div>
				<hr />
			</div>

			{openDialog && <AddBrandForm openDialog={openDialog} handleClose={handleClose} />}
		</>
	);
}
