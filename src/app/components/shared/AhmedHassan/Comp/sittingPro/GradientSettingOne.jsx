import React from "react";
import {  SettingsIcon, SuccessIcon } from "src/app/utils/icons";

const GradientSettingOne = () => {
  return (
    <div className="p-3 grid rounded-xl bg-brand-gradient w-52 h-[182px]">
      <div className="size-[42px] rounded-full mb-1 bg-pri-top-light/10 grid place-content-center">
        <SettingsIcon className="fill-white w-8 h-8" />
      </div>
      <div className="mb-3">
        <h2 className="text-white font-semibold mb-1 text-sm">Products</h2>
        <p className="paragraph text-white ">
          Add at least 1 product to your store
        </p>
      </div>
      <SuccessIcon className="fill-white " />
    </div>
  );
};

export default GradientSettingOne;
