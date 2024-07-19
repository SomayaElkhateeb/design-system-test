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
import AddBrandForm from '../../Brands/_comp/AddBrandForm';

export default function TopSectionCategoriesTable({
	title,
	setOpenDialog,
	sortMenus,
	selectedOption,
	handleSelect,
}: {
	title: string;
	setOpenDialog: (e: boolean) => void;
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	handleSelect: (e: string) => void;
}) {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();

	const ActionsMenus = [
		{ id: nanoid(), text: t('Bulk edit'), icon: <FaRegEdit className='iconClass' /> },
		{
			id: nanoid(),
			text: 'Delete all categories',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

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
				</div>
				<hr />
			</div>
		</>
	);
}
