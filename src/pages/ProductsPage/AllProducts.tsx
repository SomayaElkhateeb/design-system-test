import { useState } from "react";
import AllProductsTable from "src/app/components/page/Products/AllProducts/AllProductsTable";
import VerticalproductsCard from "src/app/components/page/Products/AllProducts/AllproductsVertical";
import TopSection from "src/app/components/page/Products/AllProducts/TopSection";
import { Product } from "src/app/interface/ProductInterface";
import { getImageUrl } from "src/app/utils";

export default function AllProducts() {

    //  hooks render products card
    const [verticalCard, setVerticalCard] = useState(false)
    

    //  dumy data
    const products: Product[] = [
        {
            id: "1",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: 10,
            quantity: 10,
            price: 1000,
            img: getImageUrl("images/product.png")
        },
        {
            id: "2",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: 10,
            quantity: 0,
            price: 1000,
            img: getImageUrl("images/product.png")
        },
        {
            id: "3",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: 10,
            quantity: 0,
            price: 1000,
            img: getImageUrl("images/product.png")
        },
        {
            id: "4",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: 10,
            quantity: 0,
            price: 1000,
            img: getImageUrl("images/product.png")
        },
        {
            id: "5",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: 10,
            quantity: 0,
            price: 1000,
            img: getImageUrl("images/product.png")
        },

    ];
    return (
        <div className=" container mx-auto mt-[0.8rem]">
            <div className=" flex flex-col ">
                {/*  top section */}
                <TopSection verticalCard={verticalCard} setVerticalCard={setVerticalCard} />

                {/*  table and vertical cards section section */}
                {!verticalCard ? <AllProductsTable products={products} /> : <VerticalproductsCard products={products} />}
            </div>
        </div>
    )
}