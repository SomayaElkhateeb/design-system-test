import { DeleteExitIcon } from "src/app/utils/icons";


const SizeAndCloseIcon = ({ size = "xl", bgColor }) => {

  return (
    <div className="rounded pl-1 flex items-center bg-constrained w-fit">
      {bgColor ?
        <>
          <span className={`bg-${bgColor} rounded-full w-4 h-4 mb-0.5 mr-1`}></span>
          <span className="uppercase text-sm text-title ">{size}</span>
          <DeleteExitIcon className="mt-1.5 fill-hint" />
        </>
        :
        <>
          <span className="uppercase text-sm text-title pl-1">{size}</span>
          <DeleteExitIcon className="mt-1.5 fill-hint" />
        </>
      }
    </div>
  )

}

export default SizeAndCloseIcon;