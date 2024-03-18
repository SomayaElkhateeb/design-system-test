import React from "react";
import { CheckIcon, SettingsIcon } from "src/app/utils/icons";

const WhiteSettingOne = () => {
  return (
    <div className="w-52 grid rounded-xl h-[182px] p-3 border-2 border-light-2">
      <div className="size-[42px] rounded-full mb-1 bg-pri-top-light grid place-content-center">
        <SettingsIcon className="fill-primary  w-8 h-8" />
      </div>
      <div className="mb-3">
        <h2 className="title mb-1">Products</h2>
        <p className="paragraph  ">Add at least 1 product to your store</p>
      </div>
      <button className="text-sm place-self-start  text-primary">Reset</button>
    </div>
  );
};

export default WhiteSettingOne;
