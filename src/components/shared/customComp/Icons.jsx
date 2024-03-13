import { CopyIcon, MoreIcon, ViewIcon } from "src/utils/icons";


const Icons = () => {
  return (
    <div className="flex gap-3">
        <ViewIcon className="cursor-pointer p-0.5"/>
        <CopyIcon className="cursor-pointer p-0.5"/>
        <MoreIcon className="cursor-pointer p-0.5"/>
    </div>
  )
}

export default Icons;