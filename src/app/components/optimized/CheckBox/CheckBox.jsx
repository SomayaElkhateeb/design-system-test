// import { useState } from "react";
// import { CheckIcon } from "src/app/utils/icons";

// const CheckBox = ({ variant }) => {
//   const [checked, setChecked] = useState(false);
//   switch (variant) {
//     case "minus":
//       return (
//         <div
//           onClick={() => setChecked(!checked)}
//           className={`hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${
//             checked && "bg-success hover:bg-sec-pressed"
//           }`}
//         >
//           {checked && (
//             <p className="text-white flex justify-center items-center h-full w-full">
//               -
//             </p>
//           )}
//         </div>
//       );
//       break;
//     default:
//       return (
//         <div
//           onClick={() => setChecked(!checked)}
//           className={` hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${
//             checked && "bg-success hover:bg-sec-pressed"
//           }`}
//         >
//           {checked && <CheckIcon className="fill-white w-full h-full" />}
//         </div>
//       );
//   }
// };

// export default CheckBox;

import { useState, useEffect } from "react";
import { CheckIcon } from "src/app/utils/icons";

const CheckBox = ({ variant, isChecked }) => {
  const [checked, setChecked] = useState(isChecked || false);

  useEffect(() => {
    // Update the state when the isChecked prop changes
    setChecked(isChecked);
  }, [isChecked]);

  const handleToggle = () => {
    setChecked(!checked);
  };

  switch (variant) {
    case "minus":
      return (
        <div
          onClick={handleToggle}
          className={`hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${
            checked && "bg-success hover:bg-sec-pressed"
          }`}
        >
          {checked && (
            <p className="text-white flex justify-center items-center h-full w-full">
              -
            </p>
          )}
        </div>
      );
    default:
      return (
        <div
          onClick={handleToggle}
          className={`hover:bg-sec-light w-5 h-5 border rounded cursor-pointer disabled:bg-hint ${
            checked && "bg-success hover:bg-sec-pressed"
          }`}
        >
          {checked && <CheckIcon className="fill-white w-full h-full" />}
        </div>
      );
  }
};

export default CheckBox;
