import { Button } from "src/app/components/optimized";
import { FaAngleRight } from "react-icons/fa6";
import CustomerGets from "./CustomerGets";

const BuyAndGet = () => {
  return (
    <div className="pt-[18px]">
      {/* select product x */}
      <Button
        variant="secondaryBtn"
        RightIcon={FaAngleRight}
        text="select products x"
      />
      {/* <SecondaryBtn text="select products x" IconRight={NextIconSm}/> */}

      {/* item view */}
      <div className="py-[18px]">
        {/* customer gets */}
        <CustomerGets />
      </div>
      {/* select product Y */}
      <Button
        variant="secondaryBtn"
        RightIcon={FaAngleRight}
        text="select products y"
      />

      {/* item view */}
      <div className="py-[18px]"></div>
    </div>
  );
};

export default BuyAndGet;
