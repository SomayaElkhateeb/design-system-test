import { DownIcon, LoadUpdateIcon, MoreIcon, PrintIcon } from "src/utils/icons";
import { useState } from "react";
import PrevNextBtn from "../customComp/PrevNextBtn";

const OrderDetails = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center bg-white h-14 pl-2 pr-4 max-w-[1186px]">

        <div className="flex gap-2 items-center">
          <button onClick={() => setIsShow(!isShow)} className="duration-500 transition-all ease-linear"><DownIcon className={isShow ? "rotate-0 mt-0.5 cursor-pointer" : "rotate-90 mt-0.5 cursor-pointer"} /></button>
          <h2 className="text-title font-semibold">Order Details</h2>
        </div>

        <div className="flex gap-5 items-center">
          <button className="flex items-center gap-2 fill-title"><LoadUpdateIcon className="p-0.5" /> <span className="font-semibold text-title text-sm">Update Status</span> </button>
          <button className="flex items-center gap-2 fill-title"><PrintIcon className="p-0.5" /> <span className="font-semibold text-title text-sm">Print Invoice</span></button>
          <button className="flex gap-2 items-center">
            <MoreIcon />
            <PrevNextBtn />
          </button>
        </div>

      </div>

      {isShow && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero asperiores repudiandae dolore, corporis similique minus ratione fuga ex laboriosam tempora ad, a vel commodi voluptas animi? Dolore, doloremque deleniti!</p>}
    </>
  )
}

export default OrderDetails;


