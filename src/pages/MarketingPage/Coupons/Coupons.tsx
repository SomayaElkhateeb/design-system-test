import React from "react";
import AddCoupon from "./AddCoupon/AddCoupon";
// import { useNavigate } from "react-router-dom";
// import { Button } from "src/app/components/optimized";

// icons
// import { IoIosAddCircle } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa6";
// import { ArrangeIcon, FilterIcon } from "src/app/utils/icons";

const Coupons: React.FC = () => {
  // const navigate = useNavigate();
  return (
    // <div>
    //   <div className="h-[70px] flex items-center border-b-2 border-light-2 mx-3">
    //     <div className="flex justify-between  w-full">
    //       <Button LeftIcon={IoIosAddCircle} text="add new coupon" />

    //       <div className="flex gap-8">
    //         <Button
    //           variant="sec"
    //           LeftIcon={ArrangeIcon}
    //           RightIcon={FaAngleDown}
    //           text="arrange"
    //         />
    //         <Button variant="sec" LeftIcon={FilterIcon} text="filter" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <AddCoupon />
    </>
  );
};

export default Coupons;
