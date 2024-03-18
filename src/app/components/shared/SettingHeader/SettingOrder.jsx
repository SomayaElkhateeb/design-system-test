import { BackIcon, LoadUpdateIcon, MoreIcon, PrintIcon } from "src/app/utils/icons";

import PrevNextBtn from "../customComp/PrevNextBtn";

const SettingOrder = ({title="Order"}) => {
  return (
      <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">

        <div className="flex gap-1 items-center">
       
            <BackIcon className="mt-0.5 cursor-pointer fill-title" />
         
          <h2 className="text-title font-semibold">{title}</h2>
        </div>

        <div className="flex gap-6 items-center">
          <button className="flex items-center gap-2"><LoadUpdateIcon className="p-0.5 fill-pri-dark" /> <span className="font-semibold text-title text-sm">Update Status</span> </button>
          <button className="flex items-center gap-2"><PrintIcon className="p-0.5 fill-pri-dark" /> <span className="font-semibold text-title text-sm">Print Invoice</span></button>
          <button className="flex gap-3 items-center">
            <MoreIcon className='fill-pri-dark'/>
            <PrevNextBtn />
          </button>
        </div>

      </div>
  )
}

export default SettingOrder;


