import React from "react";
import { PiGearLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const WhiteToastOne = () => {
  return (
    <div className="card w-52 space-y-3">
      <div className="w-10 h-10 rounded-full bg-pri-top-light grid place-content-center">
        <PiGearLight className="text-primary text-2xl" />
      </div>
      <h2 className="title">Products</h2>
      <p className="paragraph  ">Add at least 1 product to your store</p>
      <IoIosCheckmarkCircleOutline className=" text-2xl" />
    </div>
  );
};

export default WhiteToastOne;
