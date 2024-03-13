import {AddFillIcon, DownIcon} from 'src/utils/icons'

const SecondaryBtn = ({ text = 'Show result', iconRight, iconLeft }) => {
    return (
        <button className='btn-sec flex flex-row gap-x-1 pl-2 pr-2 items-center justify-center' >
            {/* <AddFillIcon className='fill-pri-dark mt-1'/> */}
            {/* put this style when you write icon */}
            {iconLeft}
            {text}
            {iconRight}
            {/* put this style when you write icon */}
            {/* <DownIcon className="fill-pri-dark mt-1 -mr-2"/> */}
        </button>
    )
}

export default SecondaryBtn