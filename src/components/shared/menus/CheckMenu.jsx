import { useState } from 'react';
import { check } from "src/utils/constants";
import { CheckIcon } from 'src/utils/icons';

const CheckMenu = () => {
  const [menuItems, setMenuItems] = useState(check);

  const handleClick = (id) => {
    setMenuItems(prevMenuItems => {
      return prevMenuItems.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  return (
    <div className="rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px] gap-0.5">
      {menuItems.map((menuItem) => {
        const { id, text, checked } = menuItem;
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={checked ? "flex text-title items-center bg-sec-light px-4 py-3 gap-2 duration-300 transition-all" :
             "flex text-title items-center group hover:bg-sec-light px-4 py-3 gap-2 duration-300 transition-all"}>
            <div className={checked ? "bg-success w-5 h-5 border rounded" : "w-5 h-5 border rounded"}>
              {checked && <CheckIcon className='fill-white' />}
            </div>
            <span className="text-sm mt-1">
              {text}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CheckMenu;











