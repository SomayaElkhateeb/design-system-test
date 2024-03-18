import { GoStarFill } from "react-icons/go";

const RatedCard = ({
  imageSrc,
  title,
  rating,
  reviews,
  price,
  priceUnit,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-auto max-w-sm relative">
      <div className="flex items-center justify-center space-x-1 bg-white p-1 w-26 rounded-md absolute top-36 left-3">
        <GoStarFill size={18} color="gold" />
        <span className="text-sm">
          {rating} ({reviews})
        </span>
      </div>
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center justify-between mt-2">
          <a href="#" className="text-indigo-500 hover:text-indigo-600">
            Let's generate sales
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex items-center">
          <span className="text-gray-700 text-base mr-2">{priceUnit}</span>
          <span className="text-base">{price} / hour</span>
        </div>
      </div>
    </div>
  );
};

RatedCard.defaultProps = {
  imageSrc: "https://picsum.photos/id/227/200/150",
  title: "The Awesome Product",
  rating: 4.3,
  reviews: 500,
  price: 200,
  priceUnit: "SAR",
  description: "Connect with Telegram to show...",
};

export default RatedCard;
