import { getImageUrl } from "src/app/utils";

const BigAppsCard = ({ imageSrc, title, description, badgeText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-96 p-4">
      <div className="relative shadow-md">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <p className="text-gray-700 mt-1">{description}</p>
        {badgeText && (
          <div className="flex items-center mt-4">
            <span className="text-green-700 text-sm bg-green-100 px-4 py-1 rounded-lg">
              {badgeText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigAppsCard;

BigAppsCard.defaultProps = {
  imageSrc: getImageUrl("social/google.png"),
  title: "Card Title 1",
  description: "This is a description for the card.",
  badgeText: "Free",
};
