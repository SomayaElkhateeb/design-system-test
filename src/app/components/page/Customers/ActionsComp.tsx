//  global componenet used in multi compoenents like AllCustomersComp

import ArrangeButton from '../../optimized/Buttons/ArrangeButton';

import FilterButton from './FilterButton';
import ActionsButton from './ActionsButton';

export interface menuType {
	id: string;
	text: string;
	icon?: React.ReactNode;
}
export default function ActionsComp({
	selectedOption,
	handelSelect,
	sortMenus,
	ActionsMenus,
	filterMenus,
}: {
	selectedOption: string;
	handelSelect: () => void;
	sortMenus?: menuType[];
	ActionsMenus?: menuType[];
	filterMenus?: menuType[];
}) {
	return (
		<div className='flex gap-4'>
			{/*   arrange button */}

			{sortMenus && sortMenus?.length > 0 && (
				<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handelSelect} />
			)}

			{/*  filter button */}

			{filterMenus && filterMenus?.length > 0 && (
				<FilterButton sortMenus={filterMenus} selectedOption={selectedOption} handelSelect={handelSelect} />
			)}
			{/*  actions button */}
			{ActionsMenus && ActionsMenus?.length > 0 && (
				<ActionsButton sortMenus={ActionsMenus} selectedOption={selectedOption} handelSelect={handelSelect} />
			)}
		</div>
	);
}
