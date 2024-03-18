import { EditIcon, MoreIcon, NextIcon } from "src/app/utils/icons";


const IconsActions = () => {
  return (
    <div className="flex items-center justify-between ml-12 w-32">
       <div className="flex items-center gap-4">
       <EditIcon className="fill-subtitle p-0.5 cursor-pointer"/>
        <MoreIcon className="fill-subtitle mt-1 cursor-pointer"/>
       </div>
        <NextIcon className="fill-subtitle mt-2 cursor-pointer"/>
    </div>
  )
}

export default IconsActions;