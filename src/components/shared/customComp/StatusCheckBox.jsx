import { useState } from "react"
import { CheckIcon } from "src/utils/icons"


const StatusCheckBox = () => {
    const [checked, setChecked] = useState(false)
    return (
        // <div className="rounded p-1 w-fit focus:bg-red-600">

        <div onClick={() => setChecked(!checked)} className={` hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${checked && "bg-success hover:bg-sec-pressed"}`}>
            {checked && <CheckIcon className="fill-white"/>}
        </div>
        // </div>
    )
}

export default StatusCheckBox;

