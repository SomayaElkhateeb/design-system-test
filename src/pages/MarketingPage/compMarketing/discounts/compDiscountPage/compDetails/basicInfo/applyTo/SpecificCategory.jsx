import { SecondaryBtn } from "src/app/components/shared";
// import CategoryViews from "src/app/components/shared/categoryViews/CategoryViews";
import { NextIconSm } from "src/app/utils/icons";


const SpecificCategory = () => {
  return (
    <div className="pt-[18px]">
        <SecondaryBtn text="select categories" IconRight={NextIconSm}/>

        {/* <CategoryViews /> */}
        <div className="mt-[18px]">

        </div>

    </div>
  )
}

export default SpecificCategory;