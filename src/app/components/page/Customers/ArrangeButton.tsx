import { useTranslation } from "react-i18next";
import PopoverComponenet from "./Popover";
import { Button, Menu } from "../../optimized";
import { FaAngleDown } from 'react-icons/fa6';
import { ArrangeIcon } from 'src/app/utils/icons';
//  global componenet used in multi components like ActionsComp
export default function ArrangeButton({ sortMenus, selectedOption, handelSelect }: { sortMenus: { id: string, text: string }[], selectedOption: string, handelSelect: () => void }) {
    //  hooks
    const { t } = useTranslation()

    return (
        <PopoverComponenet
            button={
                <>
                    <Button variant='secondary' LeftIcon={ArrangeIcon} RightIcon={FaAngleDown}>
                        {t("arrange")}
                    </Button>
                </>
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