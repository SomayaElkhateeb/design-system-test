import { Button } from "src/app/components/optimized";
import { FaAngleRight } from "react-icons/fa6";

const SpecificCategory = () => {
  return (
    <div className="pt-[18px]">
      <Button
        text="select categories"
        variant="secondaryBtn"
        RightIcon={FaAngleRight}
      />

      {/* <CategoryViews /> */}
      <div className="mt-[18px]"></div>
    </div>
  );
};

export default SpecificCategory;
