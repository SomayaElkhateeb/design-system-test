import React from "react";

import image from "../../../assets/images/Rectangle.svg";
import {
  CameraIcon,
  CopyIcon,
  EditIcon,
  MoreIcon,
  NextIcon,
  StarIcon,
  ViewIcon,
} from "src/utils/icons";
import { getImageUrl } from "src/utils";

const ProductCard = (props) => {
  // const { pic, name, category, price, qty, prodId } = props;

  return (
    <div className="card grid grid-cols-1 divide-y p-0 w-[271px]">
      <div className="relative w-full h-[260px]">
        <img src={getImageUrl("images/Rectangle.svg")} alt="product" />

        <div className="absolute top-3 bottom-2 left-3 flex flex-col justify-between  items-center ">
          <div className="flex flex-col   items-center ">
            <input
              type="checkbox"
              id="1"
              name=""
              value=""
              className="h-5 w-5 border border-hint text-secondary form-checkbox focus:border-0 focus:ring-[1px] focus:ring-hint rounded mb-3"
            />
            <StarIcon className="fill-hint" />
          </div>
          <div className="border-light-2  border rounded-full bg-white w-6 h-6 grid place-content-center">
            <CameraIcon className="w-[18px] h-[18px]" />
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <div className="flex gap-3 flex-col text-subtitle card px-2 py-1">
            <ViewIcon className="fill-subtitle" />
            <EditIcon className="fill-subtitle" />
            <CopyIcon className="fill-subtitle" />
            <MoreIcon className="fill-subtitle" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end p-3">
        <div className="space-y-1">
          <h2 className="title">DJI Mavic Pro 2</h2>
          <p className="subtitle">Blankets</p>
          <p className="paragraph">2 Options</p>
        </div>
        <NextIcon className="fill-subtitle" />
      </div>
      <div className="flex justify-between p-3">
        <p className="subheading">SKU</p>
        <p className="paragraph">SF1133569600-1</p>
      </div>
      <div className="flex justify-between p-3     ">
        <p className="subheading">Quantity</p>
        <p className="paragraph">5000</p>
      </div>
      <div className="flex justify-between p-3">
        <p className="subheading">Price</p>
        <p className="paragraph">SAR </p>
      </div>
    </div>
  );
};

export default ProductCard;
