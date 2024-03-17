import { DownIcon, LoadUpdateIcon, MoreIcon, PrintIcon } from "src/app/utils/icons";
import { useState } from "react";
import PrevNextBtn from "../customComp/PrevNextBtn";

const OrderDetails = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center bg-white pl-2 pr-4 w-[1186px] h-[58px]">

        <div className="flex gap-2 items-center">
        <button onClick={() => setIsShow(!isShow)}>
            <DownIcon className={`duration-150 transition-all ease-linear mt-0.5 cursor-pointer fill-title ${isShow ? 'rotate-0' : 'rotate-90'} `} />
          </button>
          <h2 className="text-title font-semibold">Order Details</h2>
        </div>

        <div className="flex gap-6 items-center">
          <button className="flex items-center gap-2 fill-title"><LoadUpdateIcon className="p-0.5" /> <span className="font-semibold text-title text-sm">Update Status</span> </button>
          <button className="flex items-center gap-2 fill-title"><PrintIcon className="p-0.5" /> <span className="font-semibold text-title text-sm">Print Invoice</span></button>
          <button className="flex gap-3 items-center">
            <MoreIcon />
            <PrevNextBtn />
          </button>
        </div>

      </div>

      {isShow && <p className="duration-300 transition-all ease-linear">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero asperiores repudiandae dolore, corporis similique minus ratione fuga ex laboriosam tempora ad, a vel commodi voluptas animi? Dolore, doloremque deleniti!</p>}
    </>
  )
}

export default OrderDetails;


