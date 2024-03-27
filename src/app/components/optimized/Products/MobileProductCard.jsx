//? Unfinished tasks
//! =================
// todo Action Button
import React from "react";

import { MoreIcon } from "src/app/utils/icons";
import { getImageUrl } from "src/app/utils";

const MobileProductCard = ({
  imageUrl,
  productName,
  category,
  price,
  quantity,
}) => {
  return (
    <div className="border-2 overflow-hidden border-light-2 rounded-xl bg-white p-0 grid grid-cols-1 divide-y w-[164px]">
      <div className="relative w-full h-40 ">
        <img
          src={getImageUrl(imageUrl)}
          alt={productName}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2">
          <MoreIcon className="fill-subtitle" />
        </button>
      </div>
      <div className="p-3 space-y-1">
        <h2 className="title">{productName}</h2>
        <p className="subtitle">{category}</p>
        <p className="paragraph">{price}</p>
        <p className="paragraph">Qty: {quantity}</p>
      </div>
    </div>
  );
};
export default MobileProductCard;

MobileProductCard.defaultProps = {
  imageUrl: "images/Rectangle.svg",
  productName: "DJI Mavic Pro 2",
  category: "Sportswear",
  price: "SAR 10000.00",
  quantity: 50,
};

// const ParentComponent = () => {
//   const products = [
//     {
//       imageUrl: "images/Rectangle.svg",
//       productName: "DJI Mavic Pro 2",
//       category: "Sportswear",
//       price: "SAR 10000.00",
//       quantity: 50,
//     },
//     {
//       imageUrl: "images/Rectangle.svg",
//       productName: "DJI Mavic Pro 3",
//       category: "Sportswear",
//       price: "SAR 10000.00",
//       quantity: 50,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {products.map((product, index) => (
//         <MobileProductCard key={index} {...product} />
//       ))}
//     </div>
//   );
// };
