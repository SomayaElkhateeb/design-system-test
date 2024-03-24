import { BackIconSm, NextIconSm } from "src/app/utils/icons";

const PrevNextBtn = () => {
  return (
    <div className="flex w-[67px] h-[34px]">
      <button className="border rounded-l border-pri-dark w-full flex items-center justify-center">
        <BackIconSm className=" fill-pri-dark ml-1 mt-1.5" />
      </button>
      <button className="border rounded-r border-pri-dark w-full flex items-center justify-center">
        <NextIconSm className=" fill-pri-dark ml-1.5 mt-1.5" />
      </button>
    </div>
  );
};

export default PrevNextBtn;
