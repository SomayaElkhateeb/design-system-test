import TopSection from "src/app/components/page/Products/AllProducts/TopSection";

export default function AllProducts(){
    return(
       <div className=" container mx-auto mt-[0.8rem]">
        <div className=" flex flex-col gap-[2rem]">
            {/*  top section */}
            <TopSection/>
        </div>
       </div>
    )
}