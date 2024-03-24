import {
  BackIcon,
  LinkIcon,
  MoreIcon,
  LoadUpdateIcon,
  PrintIcon,
} from "src/app/utils/icons";
import { GroupIcons, PrevNextBtn } from "..";

const HeaderSettings = ({
  variant,
  title,
  btn1 = { text: "discard", onClick: () => {} },
  btn2 = { text: "save changes", onClick: () => {} },
  btn3 = { text: "save changes", onClick: () => {} },
}) => {
  switch (variant) {
    case "settingIcons":
      return (
        <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">
          <div className="flex gap-1 items-center">
            <BackIcon className="mt-0.5 cursor-pointer fill-title" />
            <h2 className="text-title font-semibold capitalize">{title}</h2>
          </div>

          <div className="flex gap-6 items-center">
            <button onClick={btn1.onClick}>
              <LinkIcon className="fill-title p-1 mb-2" />
            </button>
            <button onClick={btn2.onClick}>
              <MoreIcon className="fill-title" />
            </button>
          </div>
        </div>
      );
      break;

    case "settingOrder":
      return (
        <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">
          <div className="flex gap-1 items-center">
            <BackIcon className="mt-0.5 cursor-pointer fill-title" />
            <h2 className="text-title font-semibold capitalize">{title}</h2>
          </div>

          <div className="flex gap-6 items-center">
            <button className="flex items-center gap-2" onClick={btn1.onClick}>
              <LoadUpdateIcon className="p-0.5 fill-pri-dark" />
              <span className="font-semibold text-title text-sm">
                Update Status
              </span>
            </button>
            <button className="flex items-center gap-2" onClick={btn2.onClick}>
              <PrintIcon className="p-0.5 fill-pri-dark" />
              <span className="font-semibold text-title text-sm">
                Print Invoice
              </span>
            </button>
            <button className="flex gap-3 items-center" onClick={btn3.onClick}>
              <MoreIcon className="fill-pri-dark" />
              <PrevNextBtn />
            </button>
          </div>
        </div>
      );
      break;

    case "settingThreeBtns":
      return (
        <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">
          <div className="flex gap-1 items-center">
            <BackIcon className="mt-0.5 cursor-pointer fill-title" />
            <h2 className="text-title font-semibold capitalize">{title}</h2>
          </div>

          <div className="flex gap-6 items-center">
            <button className="btn-ter" onClick={btn1.onClick}>
              {btn1.text}
            </button>
            <button className="btn-sec" onClick={btn2.onClick}>
              {btn2.text}
            </button>
            <button className="btn-pri" onClick={btn3.onClick}>
              {btn3.text}
            </button>
          </div>
        </div>
      );

      break;

    case "settingWithIcons":
      return (
        <div className="flex justify-between items-center  bg-white  pl-2 pr-4 h-[58px]">
          <div className="flex gap-1 items-center">
            <BackIcon className="mt-0.5 cursor-pointer fill-title" />
            <h2 className="text-title font-semibold capitalize">{title}</h2>
          </div>
          <div className="flex gap-6 items-center">
            <GroupIcons />
            <button className="btn-sec" onClick={btn1.onClick}>
              {btn1.text}
            </button>
            <button className="btn-pri" onClick={btn2.onClick}>
              {btn2.text}
            </button>
          </div>
        </div>
      );
      break;

    default:
      return (
        <div className="flex justify-between items-center bg-white pl-2 pr-4 h-[58px]">
          <div className="flex gap-1 items-center">
            <BackIcon className="mt-0.5 cursor-pointer fill-title" />
            <h2 className="text-title font-semibold capitalize">{title}</h2>
          </div>
          <div className="flex gap-6 items-center">
            <button className="btn-sec" onClick={btn1.onClick}>
              {btn1.text}
            </button>
            <button className="btn-pri" onClick={btn2.onClick}>
              {btn2.text}
            </button>
          </div>
        </div>
      );
      break;
  }
};

export default HeaderSettings;
