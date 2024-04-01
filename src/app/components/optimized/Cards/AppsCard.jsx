// Done refactoring to type
import { Link } from "react-router-dom";
import { getImageUrl } from "src/app/utils";
import { FaTelegram } from "react-icons/fa";

/**
 * @param {object} props - Props for the AppsCard component
 * @param {string} props.image - The image URL for the app
 * @param {string} props.name - The name of the app
 * @param {string} props.description - The description of the app
 * @param {string} props.status - The status of the app (available or installed)
 * @param {string} props.url - The URL to navigate to when clicked
 */

const AppsCard = ({ image, name, description, status, url }) => {
  const statusPadge = status === "available" ? "free" : "installed";

  return (
    <Link
      to={url}
      className="bg-white rounded-lg shadow-md p-3 flex gap-3  border border-border-color"
    >
      <div className="size-[60px] grid place-content-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden">
        <img src={image} className="w-full object-cover" />
      </div>
      <div>
        <h3 className="title mb-2">{name}</h3>
        <p className="paragraph text-subtitle">{description}</p>
        <img
          src={getImageUrl(`$padges/${statusPadge}.svg`)}
          alt="status"
          className="h-7 mt-3"
        />
      </div>
    </Link>
  );
};
export default AppsCard;

AppsCard.defaultProps = {
  image: <FaTelegram size={48} color="#2EA6DA" />,
  heading: "Telegram",
  paragraph:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta,eaque ducimus perspiciatis odio repudiandae nisi cupiditate doloribus",
  label: "free",
};

/*
  Usage Example:

  import React from "react";
  import AppsCard from "./AppsCard";
  import { FaTelegram } from "react-icons/fa";

  const MyComponent = () => {
    return (
      <AppsCard
        image="/path/to/image.jpg"
        name="Telegram"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        status="available"
        url="/app/telegram"
      />
    );
  };

  export default MyComponent;
*/
