import { LinkIcon } from "src/utils/icons"



const LinkBtn = ({ text = 'Learn More'}) => {
    return (
        <button className='text-primary flex flex-row justify-center items-center text-sm' >
            {text} <LinkIcon className="fill-primary p-1 mb-1"/>
        </button>
    )
}

export default LinkBtn;