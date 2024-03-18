import { AppsIcon } from "src/app/utils/icons";

{/* <SizeIcon Icon={AppsIcon}/> */}  // props icon

const SizeIcon = ({ size = "xl", Icon }) => {
  return (
    <div className="rounded py-[3px] pl-1 pr-3 flex gap-1 items-center border border-constrained w-fit">

      {Icon ? <Icon className="w-[18px] h-[18px] mb-0.5" />
      :
      <span className="bg-secondary rounded-full w-4 h-4 mb-0.5"></span>
      }


      <span className="uppercase text-sm text-title">{size}</span>
    </div>
  )
}

export default SizeIcon;