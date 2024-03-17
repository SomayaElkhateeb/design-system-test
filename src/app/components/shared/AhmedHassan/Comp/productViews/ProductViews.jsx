import { useState } from "react";
import { getImageUrl } from "src/app/utils";
import {
  CameraIcon,
  CopyIcon,
  EditIcon,
  MoreIcon,
  NextIcon,
  StarActiveIcon,
  StarIcon,
  ViewIcon,
} from "src/app/utils/icons";

const ProductViews = (props) => {
  const { image, name, category, price, qty, prodId, checked } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const isFavorietHandler = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="card w-full p-3 justify-between grid grid-cols-12">
      <div className="gap-[6px] col-span-4 flex">
        <div className="flex flex-col items-center  justify-between">
          <input
            type="checkbox"
            id="1"
            name=""
            value=""
            className="size-5 border border-hint text-secondary form-checkbox focus:border-0 focus:ring-[1px] focus:ring-hint rounded mb-3"
          />
          <button onClick={isFavorietHandler}>
            {isFavorite ? (
              <StarActiveIcon className="fill-neutral-1" />
            ) : (
              <StarIcon className="fill-hint" />
            )}
          </button>
        </div>
        <div className="flex-1 flex gap-3">
          <div className="size-[68px] rounded-lg border border-light-2 relative overflow-hidden">
            <img
              src={getImageUrl("images/Vector.svg")}
              alt="product"
              className="w-full h-full object-cover"
            />

            <div className="border-light-2 absolute bottom-1 left-1  border rounded-full bg-white w-6 h-6 grid place-content-center">
              <CameraIcon className="w-[18px] h-[18px]" />
            </div>
          </div>
          <div className="flex flex-col justify-around ">
            <h2 className="title">DJI Mavic Pro 2</h2>
            <p className="paragraph text-subtitle ">Blankets</p>
            <p className="paragraph">2 Options</p>
          </div>
        </div>
      </div>

      <div className="col-span-5 grid grid-cols-3">
        <p className="paragraph">SF1133569600-1</p>
        <p className="paragraph">5000 </p>
        <p className="paragraph">SAR 10000.00</p>
      </div>
      <div className="flex gap-3 col-span-2 justify-center items-start">
        <button>
          <ViewIcon className="fill-subtitle" />
        </button>
        <button>
          <EditIcon className="fill-subtitle" />
        </button>
        <button>
          <CopyIcon className="fill-subtitle" />
        </button>
        <button>
          <MoreIcon className="fill-subtitle" />
        </button>
      </div>

      <div className="justify-self-end items-center flex">
        <button>
          <NextIcon className="fill-subtitle" />
        </button>
      </div>
    </div>
  );
};

export default ProductViews;
