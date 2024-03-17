import { useState } from "react";
import { getImageUrl } from "src/app/utils";
import { AddBgIcon, DownIcon, MoreIcon, MoveIcon } from "src/app/utils/icons";

const ProductCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-light-2 rounded-xl w-full p-3  grid grid-cols-12">
      <div className="gap-[6px] col-span-4 flex">
        <div className="flex items-center">
          <MoveIcon className="fill-subtitle" />
        </div>

        <div className="flex-1 flex gap-3">
          <div className="size-10 rounded-lg border border-light-2 overflow-hidden">
            <img
              src={getImageUrl("images/Vector.svg")}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-around ">
            <h2 className="title">DJI Mavic Pro 2</h2>
            <p className="paragraph text-subtitle ">Blankets</p>
          </div>
        </div>
      </div>

      <div className="col-span-5 grid grid-cols-3">
        <p className="paragraph">50</p>
        <p className="paragraph">179 </p>
        <div className="flex items-start gap-[5px] ">
          <input
            type="checkbox"
            className="toggle checked:[--tglbg:#55C397] [--tglbg:#C0C7D6] bg-white hover:bg-white border-0  toggle-sm"
          />
          <p className="paragraph">on</p>
        </div>
      </div>

      <div className="flex  gap-3 col-span-2 justify-center items-start">
        <button>
          <AddBgIcon className="fill-subtitle" />
        </button>
        <button>
          <MoreIcon className="fill-subtitle" />
        </button>
      </div>
      <button
        className="justify-self-end items-center flex"
        onClick={isOpenHandler}
      >
        <DownIcon
          className={`fill-subtitle transition-all ${
            isOpen ? "rotate-180" : ""
          } `}
        />
      </button>
    </div>
  );
};

export default ProductCategory;
