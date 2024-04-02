//? Unfinished tasks
//! =================
// todo Actions Button
// todo Make the Component more clean
// todo Trigger image preview logic

import { useState } from "react";
import { getImageUrl } from "src/app/utils";
import { CheckBox } from "..";
import {
  CopyIcon,
  EditIcon,
  MoreIcon,
  NextIcon,
  StarIcon,
  ViewIcon,
  CameraIcon,
  StarActiveIcon,
} from "src/app/utils/icons";
const ProductCard = ({
  id,
  name,
  imageUrl,
  category,
  options,
  sku,
  quantity,
  price,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const isSelectedHandler = () => {
    setIsSelected(!isSelected);
  };
  const info = {
    sku: sku,
    quantity: quantity,
    price: price,
  };
  console.log(info);
  return (
    <div className="border-2 bg-white overflow-hidden border-light-2 rounded-xl grid grid-cols-1 divide-y p-0 w-[271px] group ">
      <div className="relative w-full h-[260px]">
        <img
          src={getImageUrl(imageUrl)}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 bottom-2 left-3 flex flex-col justify-between items-center">
          <div className="flex flex-col gap-4 items-center ">
            <CheckBox onChange={isSelectedHandler} />
            <button onClick={toggleFavorite}>
              {isFavorite ? (
                <StarActiveIcon className="fill-neutral-1" />
              ) : (
                <StarIcon className="fill-hint" />
              )}
            </button>
          </div>

          <div className="border-light-2 border rounded-full bg-white w-6 h-6 grid place-content-center">
            <button>
              <CameraIcon className="w-[19px] h-[19px]" />
            </button>
          </div>
        </div>

        {/* Actions Btns */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all bg-white">
          <Actions />
        </div>
      </div>
      <div className="flex justify-between items-end p-3">
        <div className="space-y-1">
          <h2 className="title">{name}</h2>
          <p className="subtitle">{category}</p>
          <p className="paragraph">{options} Options</p>
        </div>
        <button>
          <NextIcon className="fill-subtitle" />
        </button>
      </div>
      {Object.entries(info).map(([posterKey, posterValue]) => (
        <div className="flex justify-between p-3">
          <p className="subheading">{posterKey}</p>
          <p className="paragraph">{posterValue}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

const Actions = () => {
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
  </div>;
};

ProductCard.defaultProps = {
  name: "DJI Mavic Pro 2",
  imageUrl: "images/Rectangle.svg",
  category: "Blankets",
  options: 2,
  sku: "SF1133569600-1",
  quantity: 5000,
  price: "SAR 100",
};
// const ParentComponent = () => {
//   const products = [
//     {
//       id: nanoid(),
//       name: "DJI Mavic Pro 2",
//       imageUrl: "images/Rectangle.svg",
//       category: "Blankets",
//       options: 2,
//       sku: "SF1133569600-1",
//       quantity: 5000,
//       price: "SAR 100",
//     },
//     {
//       id: nanoid(),
//       name: "GoPro HERO9 Black",
//       imageUrl: "images/Rectangle.svg",
//       category: "Electronics",
//       options: 1,
//       sku: "GP2233445500-2",
//       quantity: 100,
//       price: "SAR 500",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} {...product} />
//       ))}
//     </div>
//   );
// };
