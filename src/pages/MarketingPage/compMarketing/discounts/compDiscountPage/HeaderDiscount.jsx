// import buttons
import { Link } from "react-router-dom";
import PrimaryBtn from "src/app/components/shared/buttons/PrimaryBtn"
import SecondaryBtn from "src/app/components/shared/buttons/SecondaryBtn";

// import icons
import { AddFillIconWhite, ArrangeIcon, FilterIcon, DownIconSm } from "src/app/utils/icons";
const HeaderDiscount = () => {
    return (
        <div className="h-[70px] flex items-center border-b-2 border-light-2 mx-3">
            <div className="flex justify-between  w-full">
               <Link to="/DitailsDiscount"><PrimaryBtn IconLeft={AddFillIconWhite} text="add new discount" /></Link> 

                <div className="flex gap-8">
                    <SecondaryBtn text="arrange" IconLeft={ArrangeIcon} IconRight={DownIconSm} />
                    <SecondaryBtn text="filter" IconLeft={FilterIcon} />
                </div>
            </div>
        </div>
    )
}

export default HeaderDiscount;