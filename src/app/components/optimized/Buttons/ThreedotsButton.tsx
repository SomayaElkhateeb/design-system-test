import { Menu } from '..';

import { MoreIcon } from 'src/app/utils/icons';
import PopoverComponent from '../UiKits/Popover';
//  global componenet used in multi components like ActionsComp
export default function ThreeDotsButton({
	sortMenus,
	selectedOption,
	handelSelect,
	onClick,
}: {
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	handelSelect: (e: string) => void;
	onClick: (e: string) => void;
}) {
	return (
		<PopoverComponent button={<MoreIcon className='fill-subtitle' />}>
			<Menu
				options={sortMenus}
				selectedOption={selectedOption}
				onSelect={handelSelect}
				onClick={onClick}
			/>
		</PopoverComponent>
	);
}
