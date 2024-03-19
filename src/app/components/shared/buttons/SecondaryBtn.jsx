

const SecondaryBtn = ({ text = 'Show result', IconRight, IconLeft }) => {
    return (
        <button className='btn-sec flex items-center gap-1' >
            {IconLeft && <IconLeft className="fill-pri-dark mr-1"/>}
            {text}
           {IconRight && <IconRight className='fill-pri-dark mt-1.5 -mr-3'/>}
           
        </button>
    )
}

export default SecondaryBtn;