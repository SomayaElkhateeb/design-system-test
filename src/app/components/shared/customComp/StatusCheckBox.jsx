import { useState } from "react"
import { CheckIcon } from "src/app/utils/icons"


const StatusCheckBox = () => {
    const [checked, setChecked] = useState(false)
    return (
    
        <div onClick={() => setChecked(!checked)} className={` hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${checked && "bg-success hover:bg-sec-pressed"}`}>
            {checked && <CheckIcon className="fill-white w-full h-full"/>}
        </div>
        
    )
}

export default StatusCheckBox;




