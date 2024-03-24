import { MoreIcon } from "src/app/utils/icons";

const ClientBox = ({ title = "top clients", avatar, details = "This group is high niche" }) => {
  // Capitalize the first character of the title
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {avatar}
        <div>
          <h5 className="text-title text-sm font-semibold">{capitalizedTitle}</h5>
          <p className="text-subtitle text-sm">{details}</p>
        </div>
      </div>
      <button><MoreIcon className="fill-subtitle" /></button>
    </div>
  );
};

export default ClientBox;