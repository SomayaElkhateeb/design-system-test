import { useState } from "react";
import { CheckBox } from "..";

const SelectItem = ({ title, subTitle, img, onCheckBoxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckBoxChange(newValue);
  };

  return (
    <div
      className={`w-full h-[56px] flex items-center justify-between px-[18px] hover:bg-sec-light ${
        isChecked ? "bg-sec-light" : ""
      }`}
    >
      <div className="flex items-center gap-[18px]">
        <div className="w-[46px] h-[46px] rounded overflow-hidden">
          <img src={img} alt="" className="w-full h-full" />
        </div>

        <div>
          <h4 className="capitalize text-sm font-semibold text-title">
            {title}
          </h4>
          <p className="text-subtitle text-sm">{subTitle}</p>
        </div>
      </div>

      <button onClick={handleCheckBoxClick}>
        <CheckBox isChecked={isChecked} />
      </button>
    </div>
  );
};

export default SelectItem;
