// Done refactoring to type
//? Unfinished task
//! ===============
// todo Action Button
import { MoreIcon } from 'src/app/utils/icons';
import { getImageUrl } from 'src/app/utils';

/**
 * @param {{
 *   name: string;
 *   imageUrl: string;
 *   category: string;
 *   quantity: number;
 *   price: string;
 * }} props
 *
 * @example
 *
 * ```jsx
 * <MobileProductViews
 *   name='DJI Mavic Pro 2'
 *   imageUrl='images/Vector.svg'
 *   category='Blankets'
 *   quantity={50}
 *   price='10000.00'
 * />
 */
export default function MobileProductViews(props) {
	return (
		//! w-[343px] This class can be omitted if the component takes up the maximum width of the phone.
		<div className='w-[343px] flex justify-between bg-white'>
			<div className='flex gap-[5px] items-center'>
				<div className='size-[60px] rounded-lg border border-light-2 overflow-hidden'>
					<img src={getImageUrl(props.imageUrl)} alt={props.name} />
				</div>
				<div className='flex flex-col justify-around '>
					<h2 className='title'>{props.name}</h2>
					<p className='subtitle'>{props.category}</p>
					<p className='paragraph'>Qty: {props.quantity}</p>
				</div>
			</div>
			<div className='flex flex-col items-end justify-between'>
				<button>
					<MoreIcon className='fill-subtitle' />
				</button>
				<p className='paragraph'>SAR {props.price}</p>
			</div>
		</div>
	);
}
