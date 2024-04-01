import { capitalizeFirstLetter } from "src/app/utils";
import { MoreIcon } from "src/app/utils/icons";
/**
 * @param {object} props - Props for the ClientBox component
 * @param {string} props.title - The title of the client box
 * @param {React.Component} props.avatar - The avatar or image component for the client
 * @param {string} props.details - Additional details about the client
 */

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

// Default props
ClientBox.defaultProps = {
  title: "top clients",
  details: "This group is high niche",
};

// Usage Example:
// import React from "react";
// import { AvatarComponent } from "./AvatarComponent";
//
// const MyComponent = () => {
//   return (
//     <ClientBox
//       title="Title"
//       avatar={<AvatarComponent />}
//       details="Description"
//     />
//   );
// };
//
// export default MyComponent;
