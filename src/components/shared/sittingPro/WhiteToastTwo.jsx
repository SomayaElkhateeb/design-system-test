import React from "react";
import { PiGearLight } from "react-icons/pi";
import { GoChevronRight } from "react-icons/go";

const WhiteToastTwo = () => {
  return (
    <div className=" flex justify-between card  w-80 gap-2">
      <div className="w-10 h-10 rounded-full bg-pri-top-light grid place-content-center">
        <PiGearLight className="text-primary text-2xl" />
      </div>
      <div>
        <h2 className="title">Products</h2>
        <p className="paragraph">Add at least 1 product to your store</p>
      </div>
      <GoChevronRight className="self-center text-2xl" />
    </div>
  );
};

export default WhiteToastTwo;
