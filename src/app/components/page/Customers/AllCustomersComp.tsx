import { useNavigate } from "react-router-dom";
import { Button } from "../../optimized";
import { useTranslation } from "react-i18next";
import { IoIosAddCircle } from 'react-icons/io';
import ActionsComp from "./ActionsComp";
import useSelectBox from "../../optimized/Menu/useSelectBox";
//  componenet will be used in customers page
export default function AllCustomers() {
    //  hooks
    const navigate = useNavigate()
    const { t } = useTranslation()

    //  custom hook for select arrang item

    const { selectedOption, handleSelect } =
        useSelectBox();


        
    return (
        <div className=" flex flex-col gap-[4rem]">
            {/*  top section */}
            <div className="flex justify-between items-center">
                {/*  add customers button */}
                <Button
                    variant='primary'
                    LeftIcon={IoIosAddCircle}
                    onClick={() => {
                        navigate('/addCustomer');
                    }}
                >
                    {t("Add New Customer")}
                </Button>

                {/*  actions filter arrange,... */}
                <ActionsComp  selectedOption={selectedOption} handelSelect={handleSelect}/>
            </div>


        </div>
    )
}