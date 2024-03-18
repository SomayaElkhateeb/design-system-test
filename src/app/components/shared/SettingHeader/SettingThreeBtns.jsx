import { BackIcon } from "src/app/utils/icons";
const SettingThreeBtns = ({title="Add New Customer", btn1="discard", btn2="save & add new", btn3="save changes"}) => {
  return (
    <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">
      <div className="flex gap-1 items-center">
        <BackIcon className="mt-0.5 cursor-pointer fill-title" />
        <h2 className="text-title font-semibold">{title}</h2>
      </div>

      <div className="flex gap-6 items-center">
        <button className="btn-ter">{btn1}</button>
        <button className="btn-sec">{btn2}</button>
        <button className="btn-pri">{btn3}</button>
      </div>

    </div>

  )
}

export default SettingThreeBtns;



