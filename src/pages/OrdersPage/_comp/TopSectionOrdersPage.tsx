import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { IoIosAddCircle } from 'react-icons/io';
import { SiMicrosoftexcel } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import FilterOrdersComponent from '../FilterOrder/FilterOrdersComponent';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
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

	//  custom hook
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const { selectedOption, handleSelect } = useSelectBox();
	const { xs } = useResponsive();

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

	const StatusMenus = [
		{ id: nanoid(), text: 'All Orders' },
		{ id: nanoid(), text: 'Cancelled Orders' },
		{ id: nanoid(), text: 'Delivered Orders' },
	];

	return (
		<>
			<div className='flex-col-global'>
				<div className='topTable'>
					{/*  left dropdow */}

					{!xs && (
						<Button
							onClick={() => navigate('/order/addOrder')}
							variant='primary'
							LeftIcon={IoIosAddCircle}
						>
							{addButton}
						</Button>
					)}
					{/*  actions filter arrange,... */}
					<div className='flex-row-global  gap-[1.2rem]'>
						<ActionsComp
							HandelopenDrawer={HandelopenDrawer}
							filter
							sortMenus={sortMenus}
							ActionsMenus={ActionsMenus}
							StatusMenus={StatusMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
				</div>
				<hr />
			</div>

			{/* open filter drawer */}
			{openDrawer && (
				<FilterOrdersComponent openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
			)}
		</>
	);
}
