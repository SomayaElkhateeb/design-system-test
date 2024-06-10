import { IoIosAddCircle } from 'react-icons/io';
import { Button } from '../../optimized';
import ActionsComp from '../../optimized/Buttons/ActionsComp';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useOpenFilterDrawer } from '../../SideBar/CustomHookOpenDrawer';
import FilterOrdersComponent from '../Orders/FilterOrder/FilterOrdersComponent';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function TopSectionDiscountAndCoupons({
	addButton,
	path,
}: {
	addButton: string;
	path: string;
}) {
	//  hooks
	const { xs } = useResponsive();

	const navigate = useNavigate();
	//  custom hook
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		{ id: nanoid(), text: 'Sales ( High to Low )' },
		{ id: nanoid(), text: 'Sales ( Low to  High )' },
	];

	return (
		<>
			<div className='flex-col-top-section-pages'>
				<div className='topTable'>
					{/*  left dropdow */}

					{!xs && <Button onClick={() => navigate(path)} variant='primary' LeftIcon={IoIosAddCircle}>
						{addButton}
					</Button>}

					{/*  actions  arrange,... */}
					<div className='flex-row-global  gap-[1.2rem]'>
						<ActionsComp
							HandelopenDrawer={HandelopenDrawer}
							filter
							sortMenus={sortMenus}
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
