import { AddFillIconWhite, DownIcon } from "src/app/utils/icons";


const PrimaryBtn = ({ text = 'add product', IconRight }) => {
    return (
        <button className='relative btn-pri flex  gap-1.5 pl-2 pr-1 py-2 items-center'>
            <AddFillIconWhite className='pb-1 fill-white' />
            <span className="mt-0.5 pr-1 text-sm">{text}</span>
            {IconRight && 
            <>
            <span className="absolute bg-white w-[1px] h-full right-[25px]"/>
            <DownIcon className="fill-white p-1 -mr-1"/> 
            </>
             }
            
        </button>
    )
}

export default PrimaryBtn;