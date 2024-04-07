//  global componenet used in multi compoenents like AllCustomersComp


import { useTranslation } from "react-i18next";
import { Button } from "../../optimized";

import { FaAngleDown } from 'react-icons/fa6';
import { ArrangeIcon, FilterIcon } from 'src/app/utils/icons';
import ArrangeButton from "./ArrangeButton";
import { nanoid } from "nanoid";
export default function ActionsComp({ selectedOption, handelSelect }: { selectedOption: string, handelSelect: () => void }) {
    //  hooks
    const { t } = useTranslation()

    const sortMenus = [
        { id: nanoid(), text: "Name A to Z" },
        { id: nanoid(), text: "Name Z to A" },
        { id: nanoid(), text: "Sales Ascending" },
        { id: nanoid(), text: "Sales Descending" },
        { id: nanoid(), text: "Expenses Ascending" },
        { id: nanoid(), text: "Expenses Descending" },
        { id: nanoid(), text: "Net profit Ascending" },
        { id: nanoid(), text: "Net profit Descending" },
    ];
    return (
        <div className='flex gap-4'>

            {/*   arrange button */}

            <ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handelSelect} />

            {/*  filter button */}
            <Button variant='secondary' LeftIcon={FilterIcon}>
                {t("filter")}
            </Button>

            {/*  actions button */}
            <Button variant='secondary' RightIcon={FaAngleDown}>
                {t("Actions")}
            </Button>
        </div>
    )
}