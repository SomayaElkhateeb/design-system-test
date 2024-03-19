import { IconsActions, ToggleSwitch } from "src/app/components/shared";

const TableDiscount = () => {
  return (
    <>
      {/* Title Table */}
      <div className="uppercase grid grid-cols-7 py-3 pl-5 m-3 rounded-md text-subtitle text-sm bg-white h-[43px]">
        <h4 className="col-span-2">discount name</h4>
        <h4>discount</h4>
        <h4>ends at</h4>
        <h4>active?</h4>
        <h4>sales</h4>
        <h4 className="flex items-center justify-center pl-5">actions</h4>
      </div>


      {/* Body Table */}
      <div className="grid grid-cols-7 pl-5 m-3 rounded-md text-title text-sm bg-white h-[52px]" style={{lineHeight: "52px"}}>
        <h3 className="font-semibold col-span-2">Summer discount </h3>
        <p className="">-SAR 20.00</p>
        <p className="">4/5/2020</p>
        <div className="mt-4"><ToggleSwitch /></div>
        <p>SAR 10000.00</p>
        <div className="flex items-center justify-end pr-3">
        <IconsActions />
        </div>
      </div>
    </>
  )
}

export default TableDiscount