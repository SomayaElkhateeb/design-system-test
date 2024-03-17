import {AddFillIcon, DownIcon} from 'src/app/utils/icons'

const SecondaryBtn = ({ text = 'Show result', IconRight, IconLeft }) => {
    return (
        <button className='btn-sec flex flex-row p-2 items-center justify-center' >
            <IconLeft className="fill-pri-dark mt-1 "/>
            {text}
            <IconRight className='fill-pri-dark p-1 mt-0.5'/>
           
        </button>
    )
}

export default SecondaryBtn