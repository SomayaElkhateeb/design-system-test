
import { useState } from "react";
import { ProductCard } from "src/app/components/optimized";
import { Product } from "src/app/interface/ProductInterface";

export default function VerticalproductsCard({ products }: { products: Product[] }) {

    //  hooks
    const [array, setArray] = useState<string[]>([])


    return (

        <div className='grid gap-[1.2rem] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1rem]'>
            {products?.map((e) => (

                <ProductCard key={e.id} array={array} setArray={setArray} imageUrl={e.img} id={e.id} options={e.option} name={e.title} quantity={e.quantity} price={e.price} sku={e.SKU} category={e.category} />

            ))}
        </div>



    )
}