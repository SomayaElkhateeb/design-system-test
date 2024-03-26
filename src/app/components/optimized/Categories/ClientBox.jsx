import { capitalizeFirstLetter } from "src/app/utils";
import { MoreIcon } from "src/app/utils/icons";

const ClientBox = ({
  title = "top clients",
  avatar,
  details = "This group is high niche",
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {avatar}
        <div>
          <h5 className="text-title text-sm font-semibold">
            {capitalizeFirstLetter(title)}
          </h5>
          <p className="text-subtitle text-sm">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientBox;
