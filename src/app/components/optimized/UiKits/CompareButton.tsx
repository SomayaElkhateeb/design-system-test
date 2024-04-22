import { CalenderIcon, DownIcon } from "src/app/utils/icons";
import PopoverComponenet from "../../page/Customers/Popover";
import Button from "./Button";
import Menu from "../Menu/Menu";

interface Props {
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	variant?: any;
	// handelSelect: () => void;
	handleSelect: (option: string) => void; 
}



export default function CompareButton({ sortMenus, selectedOption, variant, handleSelect }: Props) {
	switch (variant) {
		case 'link':
			return (
				<PopoverComponenet
					button={
						<Button variant={variant} RightIcon={DownIcon}>
							{selectedOption}
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