import { customerGets } from "src/app/utils/constants";
import { SelectButtons } from "../../..";


const CustomerGets = () => {
    return (
        <div className="flex flex-col gap-[18px]">
            <div className="flex gap-1 items-center">
                <h5 className="text-sm text-pri-dark font-semibold mb-2">Customer Gets</h5>
                <p className="text-sm text-pri-dark">(<span>5</span> products Y with <span>20</span>% offer)</p>
            </div>
            <div>
            <SelectButtons data={customerGets}/>
            </div>
        </div>
    )
}

export default CustomerGets;