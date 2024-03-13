import { NavLink } from 'react-router-dom';
import {controlProductsMenus} from '../../../utils/constants';

const ControlProductsMenus = () => {
    console.log(controlProductsMenus)
  return (













    <div className='bg-white p-5 rounded w-64'>
        {controlProductsMenus.map(item => {
            const {id, Icon, text} = item;
            return (
                <NavLink className='flex gap-3 h-9 hover-bg-sky-500' key={id}><Icon /> <span className='text-sm '>{text}</span> </NavLink>

            )
           
        })}
    </div>
  )
}

export default ControlProductsMenus;

