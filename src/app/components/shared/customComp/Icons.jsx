import { CopyIcon, MoreIcon, ViewIcon } from "src/app/utils/icons";


const Icons = () => {
  return (
    <div className="flex gap-3">
        <ViewIcon className="cursor-pointer fill-pri-dark"/>
        <CopyIcon className="cursor-pointer fill-pri-dark"/>
        <MoreIcon className="cursor-pointer fill-pri-dark"/>
    </div>
  )
}

export default Icons;