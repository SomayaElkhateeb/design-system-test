import { TooltipIcon } from "src/app/utils/icons";

// const Tooltip = ({ message }) => {
// return (
//     <div className="relative inline-block w-[150px] text-center">
//       <div className="group inline-block">
//         <TooltipIcon className="fill-secondary cursor-pointer ml-1 mt-2" />

//         <div className="absolute bg-title text-white text-sm py-1 px-1.5 rounded opacity-0 bottom-full left-0 group-hover:opacity-100 transition-opacity duration-300">

//           {message}

//           <svg
//             className="absolute text-title h-2 w-full left-0 top-full"
//             x="0px"
//             y="0px"
//             viewBox="0 0 255 255"
//           >
//             <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

const Tooltip = ({ message }) => {
  return (
    <div className="relative group inline-block">
      <TooltipIcon className="fill-secondary cursor-pointer" />
      <div className="absolute  bg-title -left-[50%]  text-white text-sm py-1 px-1.5 rounded scale-0 group-hover:scale-100  transition-all duration-300">
        {message}
        <svg
          className="absolute text-title h-2 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default Tooltip;