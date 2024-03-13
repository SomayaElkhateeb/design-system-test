import { AddFillIconWhite, DownIcon } from "src/utils/icons";


const PrimaryBtn = ({ text = 'add product', leftIcon , rightIcon}) => {
    return (
        <button className='btn-pri flex  gap-1.5 pl-2 pr-1 items-center ' >
         {leftIcon}
         <AddFillIconWhite className='pb-1'/> 
            <span className="mt-0.5 pr-1">{text}</span> 
            {rightIcon}
            {/* put this style when you write icon */}
        <DownIcon className="fill-white border-l mt-1 -mr-1"/>      
        </button>
    )
}

export default PrimaryBtn;