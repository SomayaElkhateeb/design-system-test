import { useState } from "react";


const StatusMinusBox = () => {
    const [checked, setChecked] = useState(false)
    return (
        <div onClick={() => setChecked(!checked)} className={`hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${checked && "bg-success hover:bg-sec-pressed"}`}>
            {checked && <p className="text-white flex justify-center items-center h-full w-full">-</p>}
        </div>
    )
}

export default StatusMinusBox;