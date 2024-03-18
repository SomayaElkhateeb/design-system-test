

const PrimaryBtn = ({ text = 'add product', IconRight, IconLeft }) => {
    return (
        <button className='relative btn-pri flex  gap-1.5 pl-2 pr-1 py-2 items-center'>
            {IconLeft && <IconLeft className='fill-white' />}
            <span className="mt-0.5 pr-1 text-sm">{text}</span>
            {IconRight &&
                <>
                    <span className="absolute bg-white w-[1px] mr-1 h-full right-[25px]" />
                    <IconRight className="fill-white" />
                </>
            }

        </button>
    )
}

export default PrimaryBtn;