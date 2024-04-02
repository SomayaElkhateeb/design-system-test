//? Unfinished tasks
//! =================
// todo Actions Button
// todo Make the Component more clean
// todo collect number of checked cards
// todo Trigger image preview logic

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
import { CheckBox } from "..";

const ProductViews = ({
  name,
  imageUrl,
  category,
  options,
  sku,
  quantity,
  price,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // console.log(isFavorite);
  console.log(isChecked);

  const isFavoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };

  const checkBoxHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className={`rounded-lg w-full p-3 justify-between grid border grid-cols-12 bg-white ${
        isChecked ? "border-success" : "border-light-2"
      }`}
    >
      <div className="gap-[6px] col-span-4 flex items-center">
        <div className="flex flex-col items-center gap-5">
          <CheckBox onChange={checkBoxHandler} />
          <button onClick={isFavoriteHandler}>
            {isFavorite ? (
              <StarActiveIcon className="fill-neutral-1" />
            ) : (
              <StarIcon className="fill-hint" />
            )}
          </button>
        </div>
        <div className="flex-1 flex gap-3 items-center">
          <div className="size-[68px] rounded-lg border border-light-2 relative overflow-hidden">
            <img
              src={getImageUrl(imageUrl)}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="border-light-2 absolute bottom-1 left-1 border rounded-full bg-white w-6 h-6 grid place-content-center">
              <CameraIcon className="w-[18px] h-[18px]" />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <h2 className="title">{name}</h2>
            <p className="paragraph text-subtitle">{category}</p>
            <p className="paragraph">{options} Options</p>
          </div>
        </div>
      </div>

      <div className="col-span-5 grid grid-cols-3">
        <p className="paragraph">{sku}</p>
        <p className="paragraph">{quantity}</p>
        <p className="paragraph">{price}</p>
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

ProductViews.defaultProps = {
  name: "DJI Mavic Pro 2",
  imageUrl: "images/Vector.svg",
  category: "Blankets",
  options: 2,
  sku: "SF1133569600-1",
  quantity: 5000,
  price: "SAR 10000.00",
};

// const ParentComponent = () => {
//   const products = [
//     {
//       name: 'DJI Mavic Pro 2',
//       imageUrl: 'images/Vector.svg',
//       category: 'Blankets',
//       sku: 'SF1133569600-1',
//       quantity: 5000,
//       price: 'SAR 10000.00',
//     },
//   ];
//   return (
//     <div>
//       {products.map((product, index) => (
//         <ProductViews key={index} {...product} />
//       ))}
//     </div>
//   );
// };
