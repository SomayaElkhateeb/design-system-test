import { SecondaryBtn } from "src/app/components/shared";
import { NextIconSm } from "src/app/utils/icons";
import CustomerGets from "./CustomerGets";


const BuyAndGet = () => {
  return (
    <div className="pt-[18px]">
        {/* select product x */}
        <SecondaryBtn text="select products x" IconRight={NextIconSm}/>

        {/* item view */}
        <div className="py-[18px]">

        {/* customer gets */}
        <CustomerGets />

        </div>
        {/* select product Y */}
        <SecondaryBtn text="select products y" IconRight={NextIconSm}/>

         {/* item view */}
         <div className="py-[18px]">
          
         </div>
    </div>
  )
}

export default BuyAndGet;