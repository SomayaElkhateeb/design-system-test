import { BackIcon, LinkIcon, MoreIcon } from "src/app/utils/icons";

const SettingIcons = ({ title = "Customer Info" }) => {
  return (
    <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">
      <div className="flex gap-1 items-center">

        <BackIcon className="mt-0.5 cursor-pointer fill-title" />

        <h2 className="text-title font-semibold">{title}</h2>
      </div>

      <div className="flex gap-6 items-center">
        <button><LinkIcon className="fill-title p-1 mb-2" />  </button>
        <button ><MoreIcon className="fill-title" /></button>
      </div>
    </div>
  )
}

export default SettingIcons;






