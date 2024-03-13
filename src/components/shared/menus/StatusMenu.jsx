
import { productStatus } from 'src/utils/constants';

const StatusMenu = () => {
  return (
    <div className="rounded bg-white shadow-md border-b border-light-2 py-2 px-3 flex flex-col w-48 md:w-[341px]">
      {productStatus.map((menuItem) => {
        const { id, text, Icon, description } = menuItem;
        return (
          <button key={id} className=" text-title gap-1 py-3 flex flex-col border-b border-light-2 last-of-type:border-none">

            <div className='flex items-center gap-2'>
              <span className="  font-semibold">
                {text}
              </span>

              <span className='flex text-xs items-center px-1 py-0.5 justify-center bg-secondary text-white rounded '><Icon className="p-0.5 pl-0 fill-white" /> Shipped</span>
            </div>

            <p className='text-sm text-subtitle'>{description}</p>

          </button>
        );
      })}
    </div>
  )
}

export default StatusMenu;