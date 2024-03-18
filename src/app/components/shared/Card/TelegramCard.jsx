import { FaTelegram } from "react-icons/fa";

const TelegramCard = ({ icon, heading, paragraph, label }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-start max-w-md">
      <span className="mr-4">{icon}</span>
      <div>
        <h3 className="font-bold mb-2">{heading}</h3>
        <p className="text-gray-700">{paragraph}</p>
        <span className="bg-green-100 text-md px-3 py-1 rounded-xl mt-1 block w-14 capitalize">
          {label}
        </span>
      </div>
    </div>
  );
};

TelegramCard.defaultProps = {
  icon: <FaTelegram size={48} color="#2EA6DA" />,
  heading: "Telegram",
  paragraph:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta,eaque ducimus perspiciatis odio repudiandae nisi cupiditate doloribus",
  label: "free",
};
export default TelegramCard;
