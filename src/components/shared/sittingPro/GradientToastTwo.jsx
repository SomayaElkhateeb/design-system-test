import React from "react";
import { PiGearLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const GradientToastTwo = () => {
  return (
    <div className="p-5 flex justify-between rounded-2xl bg-brand-gradient  w-80 gap-2">
      <div className="w-10 h-10 rounded-full bg-pri-top-light/5 grid place-content-center">
        <PiGearLight className="text-white text-2xl" />
      </div>
      <div>
        <h2 className="text-white font-semibold text-sm">Products</h2>
        <p className="paragraph text-white ">
          Add at least 1 product to your store
        </p>
      </div>
      <IoIosCheckmarkCircleOutline className="text-white text-2xl self-center " />
    </div>
  );
};

export default GradientToastTwo;
