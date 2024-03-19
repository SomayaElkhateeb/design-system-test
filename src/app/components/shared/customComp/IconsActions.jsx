import { EditIcon, MoreIcon, NextIcon } from "src/app/utils/icons";


const IconsActions = () => {
  return (
    <div className="flex items-center gap-4">
       <EditIcon className="fill-subtitle p-0.5 cursor-pointer"/>
        <MoreIcon className="fill-subtitle mt-1 cursor-pointer"/>
        <NextIcon className="fill-subtitle mt-1 cursor-pointer"/>
    </div>
  )
}

export default IconsActions;