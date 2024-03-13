import {controlProductsMenus} from 'src/utils/constants';

const ControlProductsMenu = () => {
  return (
    <div className="rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px] gap-0.5">
      {controlProductsMenus.map((menuItem) => {
        const { id, text, Icon } = menuItem;
        return (
          <button
            key={id}
            className="
          flex text-title gap-2 items-center group hover:bg-sec-light px-4 py-3 focus:bg-sec-light duration-300 transition-all"
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm ">
              {text}
            </span>
          </button>
        );
      })}
    </div>
  )
}

export default ControlProductsMenu;