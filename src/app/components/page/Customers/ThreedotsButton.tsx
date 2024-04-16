
import PopoverComponenet from "./Popover";
import { Menu } from "../../optimized";


import { MoreIcon } from "src/app/utils/icons";
//  global componenet used in multi components like ActionsComp
export default function ThreeDotsButton({ sortMenus, selectedOption, handelSelect }: { sortMenus: { id: string, text: string }[], selectedOption: string, handelSelect: () => void }) {


    return (
        <PopoverComponenet
            button={
                <MoreIcon className='fill-subtitle' />
            }
        >
            <Menu
                options={sortMenus}
                selectedOption={selectedOption}
                onSelect={handelSelect}

            />
        </PopoverComponenet>
    )
}