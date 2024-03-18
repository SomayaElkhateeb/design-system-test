// import React, { useState } from 'react';
// import { sortMenus } from 'src/utils/constants';
// import { CheckIcon } from 'src/utils/icons';

// const SortMenu = () => {
//   const [selectedSort, setSelectedSort] = useState(null);

//   const handleSortClick = (id) => {
//     setSelectedSort(id);
//   };

//   return (
//     <div className="rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px] gap-0.5">
//       {sortMenus.map((menuItem) => {
//         const { id, text } = menuItem;
//         const isSelected = selectedSort === id;

//         return (
//           <button
//             key={id}
//             className={`
//               flex text-title justify-between items-center group hover:bg-sec-light px-4 py-3 focus:bg-sec-light duration-300 transition-all
//               ${isSelected ? 'bg-sec-light' : ''}
//             `}
//             onClick={() => handleSortClick(id)}
//           >
//             <span className={`text-sm ${isSelected ? 'text-sec-pressed' : ''}`}>
//               {text}
//             </span>
//             {isSelected && <CheckIcon className="fill-sec-pressed mt-1" />}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// export default SortMenu;

import {sortMenus} from 'src/app/utils/constants'; 
import { CheckIcon } from 'src/app/utils/icons';

const SortMenu = () => {
  return (
    <div className="rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px] gap-0.5">
      {sortMenus.map((menuItem) => {
        const { id, text } = menuItem;
        return (
          <button
            key={id}
            className="
          flex text-title justify-between items-center group hover:bg-sec-light px-4 py-3 focus:bg-sec-light duration-300 transition-all"
          >
            <span className="text-sm group-focus:text-sec-pressed">
              {text}
            </span>
            <CheckIcon className="group-focus:fill-sec-pressed hidden group-focus:block mt-1" />
          </button>
        );
      })}
    </div>
  );
}
export default SortMenu;


