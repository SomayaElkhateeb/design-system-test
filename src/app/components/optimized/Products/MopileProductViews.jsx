//? Unfinished task
//! ===============
// todo Action Button
import { MoreIcon } from "src/app/utils/icons";
import { getImageUrl } from "src/app/utils";

const MopileProductViews = ({ name, imageUrl, category, quantity, price }) => {
  return (
    //! w-[343px] This class can be omitted if the component takes up the maximum width of the phone.
    <div className="w-[343px] flex justify-between bg-white">
      <div className="flex gap-[5px] items-center">
        <div className="size-[60px] rounded-lg border border-light-2 overflow-hidden">
          <img src={getImageUrl(imageUrl)} alt={name} />
        </div>
        <div className="flex flex-col justify-around ">
          <h2 className="title">{name}</h2>
          <p className="subtitle">{category}</p>
          <p className="paragraph">Qty: {quantity}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button>
          <MoreIcon className="fill-subtitle" />
        </button>
        <p className="paragraph">SAR {price}</p>
      </div>
    </div>
  );
};
export default MopileProductViews;
MopileProductViews.defaultProps = {
  name: "DJI Mavic Pro 2",
  imageUrl: "images/Vector.svg",
  category: "Blankets",
  quantity: 50,
  price: "10000.00",
};

// const ParentComponent = () => {
//   const products = [
//     {
//       name: 'DJI Mavic Pro 2',
//       imageUrl: 'images/Vector.svg',
//       category: 'Blankets',
//       quantity: 50,
//       price: '10000.00',
//     },
//     {
//       name: 'DJI Mavic Pro 2',
//       imageUrl: 'images/Vector.svg',
//       category: 'Blankets',
//       quantity: 50,
//       price: '10000.00',
//     },
//   ];
//   return (
//     <div>
//       {products.map((product, index) => (
//         <MopileProductViews key={index} {...product} />
//       ))}
//     </div>
//   );
// };
