import React from "react";

import { MoreIcon } from "src/app/utils/icons";
import { getImageUrl } from "src/app/utils";
const MobileProductCard = (props) => {
  // const { image, name, category, price, qty, prodId } = props;

  return (
    <div className="border-2 overflow-hidden border-light-2 rounded-xl bg-white p-0 grid grid-cols-1 divide-y w-[164px]">
      <div className="relative w-full h-40 ">
        <img src={getImageUrl("images/Rectangle.svg")} alt="product" className="w-full h-full object-cover"/>
        <button className="absolute top-2 right-2">
          <MoreIcon className=" fill-subtitle" />
        </button>
      </div>
      <div className="p-3 space-y-1">
        <h2 className="title">DJI Mavic Pro 2</h2>
        <p className="subtitle">Sportswear</p>
        <p className="paragraph">SAR 10000.00</p>
        <p className="paragraph">Qty: 50</p>
      </div>
    </div>
  );
};

export default MobileProductCard;
