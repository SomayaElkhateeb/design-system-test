import { BackIcon, NextIcon } from "src/app/utils/icons"


const PrevNextBtn = () => {
    return (
        <div className=" flex">
            <button className="border rounded-l border-pri-dark">
                <BackIcon className="mt-1 ml-1 fill-pri-dark" />
            </button>
            <button className="border rounded-r border-pri-dark">
                <NextIcon className="mt-1 ml-1 fill-pri-dark" />
            </button>
        </div>
    )
}

export default PrevNextBtn;