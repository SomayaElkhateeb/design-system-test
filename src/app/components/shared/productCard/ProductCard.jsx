import React, { useState } from "react";

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
import { getImageUrl } from "src/app/utils";

const ProductCard = (props) => {
  // const { pic, name, category, price, qty, prodId } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const isFavorietHandler = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="border-2 bg-white overflow-hidden border-light-2 rounded-xl grid grid-cols-1 divide-y p-0 w-[271px] group">
      <div className="relative w-full h-[260px]">
        <img
          src={getImageUrl("images/Rectangle.svg")}
          alt="product"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 bottom-2 left-3 flex flex-col justify-between  items-center ">
          <div className="flex flex-col   items-center ">
            <input
              type="checkbox"
              id="1"
              name=""
              value=""
              className="h-5 w-5 border border-hint text-secondary form-checkbox focus:border-0 focus:ring-[1px] focus:ring-hint rounded mb-3"
            />
            <button onClick={isFavorietHandler}>
              {isFavorite ? (
                <StarActiveIcon className="fill-neutral-1" />
              ) : (
                <StarIcon className="fill-hint" />
              )}
            </button>
          </div>
          <div className="border-light-2  border rounded-full bg-white w-6 h-6 grid place-content-center">
            <button>
              <CameraIcon className="w-[19px] h-[19px]" />
            </button>
          </div>
        </div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all bg-white">
          <div className="flex gap-3 flex-col card px-2 py-1">
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
        </div>
      </div>
      <div className="flex justify-between items-end p-3">
        <div className="space-y-1">
          <h2 className="title">DJI Mavic Pro 2</h2>
          <p className="subtitle">Blankets</p>
          <p className="paragraph">2 Options</p>
        </div>
        <button>
          <NextIcon className="fill-subtitle" />
        </button>
      </div>
      <div className="flex justify-between p-3">
        <p className="subheading">SKU</p>
        <p className="paragraph">SF1133569600-1</p>
      </div>
      <div className="flex justify-between p-3     ">
        <p className="subheading">QUANTITY</p>
        <p className="paragraph">5000</p>
      </div>
      <div className="flex justify-between p-3">
        <p className="subheading">PRICE</p>
        <p className="paragraph">SAR </p>
      </div>
    </div>
  );
};

export default ProductCard;
