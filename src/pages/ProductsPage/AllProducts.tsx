import { useState } from "react";
import AllProductsTable from "src/app/components/page/Products/AllProducts/AllProductsTable";
import TopSection from "src/app/components/page/Products/AllProducts/TopSection";

export default function AllProducts() {

    //  hooks render products card
    const [verticalCard, setVerticalCard] = useState(false)
    return (
        <div className=" container mx-auto mt-[0.8rem]">
            <div className=" flex flex-col ">
                {/*  top section */}
                <TopSection verticalCard={verticalCard} setVerticalCard={setVerticalCard} />

                {/*  table section */}
                {!verticalCard && <AllProductsTable />}
            </div>
        </div>
    )
}