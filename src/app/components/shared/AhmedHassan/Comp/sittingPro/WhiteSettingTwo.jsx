import React from "react";
import { PiGearLight } from "react-icons/pi";
import { GoChevronRight } from "react-icons/go";
import { NextIcon, SettingsIcon } from "src/app/utils/icons";

const WhiteSettingTwo = () => {
  return (
    <div className="border-2 border-light-2 rounded-xl flex justify-between w-[343px] h-20 p-3 gap-2">
      <div className="size-10 rounded-full bg-pri-top-light grid place-content-center">
        <SettingsIcon className="fill-primary w-8 h-8" />
      </div>
      <div>
        <h2 className="title">Products</h2>
        <p className="paragraph">Add at least 1 product to your store</p>
      </div>
      <button className="self-center">
        <NextIcon className="fill-pri-dark" />
      </button>
    </div>
  );
};

export default WhiteSettingTwo;
