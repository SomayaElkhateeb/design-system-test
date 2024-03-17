import React from "react";
import { SettingsIcon, SuccessIcon } from "src/app/utils/icons";

const GradientSettingTwo = () => {
  return (
    <div className="p-3 flex justify-between rounded-xl bg-brand-gradient  w-[343px] h-20 gap-2">
      <div className="size-10 rounded-full bg-pri-top-light/10 grid place-content-center">
        <SettingsIcon className="fill-white  w-8 h-8" />
      </div>
      <div>
        <h2 className="text-white font-semibold text-sm">Products</h2>
        <p className="paragraph text-white">
          Add at least 1 product to your store
        </p>
      </div>
      <SuccessIcon className="fill-white self-center" />
    </div>
  );
};

export default GradientSettingTwo;
