import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getImageUrl } from "src/app/utils";

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
  icon: <FaTelegram size={48} color="#2EA6DA" />,
  heading: "Telegram",
  paragraph:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta,eaque ducimus perspiciatis odio repudiandae nisi cupiditate doloribus",
  label: "free",
};
