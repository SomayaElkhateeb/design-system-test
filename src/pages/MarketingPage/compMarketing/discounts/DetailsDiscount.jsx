import {SettingTwoBtns, ToggleSwitch} from "src/app/components/shared";
import { BasicInfo, CustomerSegment, MinimumRequirements, ActiveDates } from "./compDiscountPage";


const DetailsDiscount = () => {
    return (
        <div>
            <SettingTwoBtns />
            <div className="p-4 flex justify-between gap-7">
                <div className="w-full flex flex-col gap-[18px]">
                    <BasicInfo />
                    <CustomerSegment />
                    <MinimumRequirements />
                    <ActiveDates />
                </div>
                {/*  */}
                <div className="bg-white w-[277px] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[18px]">
                    <h3 className="text-title font-semibold">Quick actions</h3>
                    <ToggleSwitch />
                </div>
            </div>

        </div>
    )
}

export default DetailsDiscount;