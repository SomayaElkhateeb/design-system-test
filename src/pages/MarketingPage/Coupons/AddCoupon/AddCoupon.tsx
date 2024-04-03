import React from "react";
import { HeaderSettings, ToggleSwitch } from "src/app/components/optimized";
import BasicInfo from "./BasicInfo/BasicInfo";

const AddCoupon: React.FC = () => {
  return (
    <div>
      <HeaderSettings
        variant="settingTwoBtns"
        to={-1}
        title="Add coupon"
        btn1={{ text: "Discard", onClick: () => {} }}
        btn2={{ text: "Save Changes", onClick: () => {} }}
      />

      <div className="p-4 flex justify-between gap-[1rem]">
        <div className="w-full flex flex-col gap-[1rem]">
          <BasicInfo />
        </div>
        <div className="bg-white w-[15rem] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[1rem]">
          <h3 className="text-title font-semibold">Quick actions</h3>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
