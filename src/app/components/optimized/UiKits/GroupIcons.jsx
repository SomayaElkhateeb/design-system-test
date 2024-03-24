// edit, copy
import {
  CopyIcon,
  EditIcon,
  MoreIcon,
  NextIcon,
  ViewIcon,
} from "src/app/utils/icons";

const GroupIcons = ({ variant }) => {
  switch (variant) {
    case "edit":
      return (
        <div className="flex items-center gap-4">
          <EditIcon className="fill-subtitle p-0.5 cursor-pointer" />
          <MoreIcon className="fill-subtitle mt-1 cursor-pointer" />
          <NextIcon className="fill-subtitle mt-1 cursor-pointer" />
        </div>
      );
      break;

    default:
      return (
        <div className="flex gap-3">
          <ViewIcon className="cursor-pointer fill-pri-dark" />
          <CopyIcon className="cursor-pointer fill-pri-dark" />
          <MoreIcon className="cursor-pointer fill-pri-dark" />
        </div>
      );
      break;
  }
};

export default GroupIcons;
