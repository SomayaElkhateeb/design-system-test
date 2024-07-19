import { Button } from 'src/app/components/optimized';

import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';

import { nanoid } from 'nanoid';

import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';

import { LiaTrashAlt } from 'react-icons/lia';

import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function TopSectionBrandsTable({
	setOpenAddOrUpdateDialog,
	sortMenus,
	selectedOption,
	handleSelect,
}: {
	setOpenAddOrUpdateDialog: (e: boolean) => void;
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	handleSelect: (e: string) => void;
}) {
	//  hooks

	const { xs } = useResponsive();

	const { t } = useTranslation();

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

	return (
		<>
			<div className='flex-col-global'>
				<div className='topTable'>
					{/*  left dropdow */}

					{!xs && (
						<Button
							onClick={() => setOpenAddOrUpdateDialog(true)}
							variant='primary'
							LeftIcon={IoIosAddCircle}
						>
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
				</div>

				<hr />
			</div>
		</>
	);
}
