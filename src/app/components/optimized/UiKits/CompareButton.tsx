import { CalenderIcon, DownIcon } from 'src/app/utils/icons';
import PopoverComponenet from '../Popover/Popover';
// import Button from "./Button";
import Menu from '../Menu/Menu';
import { Button } from '..';
import { useTranslation } from 'react-i18next';

interface Props {
	sortMenus: { id: string; text: string }[];
	selectedOption?: string;
	variant?: any;
	// handelSelect: () => void;
	handleSelect?: (option: string) => void;
}

export default function CompareButton({ sortMenus, selectedOption, variant, handleSelect }: Props) {
	switch (variant) {
		case 'link':
			const { t } = useTranslation();
			return (
				<PopoverComponenet
					button={
						<Button variant={variant} RightIcon={DownIcon}>
							{selectedOption ? selectedOption : t('Today')}
						</Button>
					}
				>
					<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />
				</PopoverComponenet>
			);

		default:
			return (
				<PopoverComponenet
					button={
						<Button variant='secondary' LeftIcon={CalenderIcon} RightIcon={DownIcon}>
							{selectedOption}
						</Button>
					}
				>
					<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />
				</PopoverComponenet>
			);
	}
}
