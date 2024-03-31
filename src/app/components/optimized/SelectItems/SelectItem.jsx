import { useState } from "react";
import { Avatars, CheckBox, ClientBox } from "..";

const SelectItem = ({
  title,
  subTitle,
  img,
  fName,
  lName,
  count,
  onCheckBoxChange,
  varient,
  // productCategory,
  // group,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckBoxChange(newValue);
  };

  switch (varient) {
    case "customers":
      return (
        <>
          <ClientBox
            title={fName + " " + lName}
            details={subTitle}
            avatar={<Avatars img={img} fName={fName} lName={lName} />}
          />
          <button onClick={handleCheckBoxClick}>
            <CheckBox isChecked={isChecked} />
          </button>
        </>
      );
      break;
    case "groups":
      return (
        <>
          <ClientBox
            title={title}
            details={subTitle}
            avatar={<Avatars variant="countAvatar" count={count} />}
          />
          <button onClick={handleCheckBoxClick}>
            <CheckBox isChecked={isChecked} />
          </button>
        </>
      );
      break;
    default:
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
  }
};

export default SelectItem;

SelectItem.js;
