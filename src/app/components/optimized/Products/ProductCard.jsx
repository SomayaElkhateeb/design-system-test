//? Unfinished tasks
//! =================
// todo Actions Button
// todo Make the Component more clean
// todo Trigger image preview logic

import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import { CheckBox } from '..';
import {
	CopyIcon,
	EditIcon,
	MoreIcon,
	NextIcon,
	StarIcon,
	ViewIcon,
	CameraIcon,
	StarActiveIcon,
} from 'src/app/utils/icons';

/**
 * @param {{
 *   id: string;
 *   name: string;
 *   imageUrl: string;
 *   category: string;
 *   options: number;
 *   sku: string;
 *   quantity: number;
 *   price: string;
 * }} props
 *
 * @example
 *
 * ```jsx
 * <ProductCard
 *   id='1'
 *   name='DJI Mavic Pro 2'
 *   imageUrl='images/Vector.svg'
 *   category='Blankets'
 *   options={50}
 *   sku='123456'
 *   quantity={50}
 *   price='10000.00'
 * />
 */
export default function ProductCard(props) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isSelected, setIsSelected] = useState(false);

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
	}
	function isSelectedHandler() {
		setIsSelected(!isSelected);
	}
	const info = {
		sku: props.sku,
		quantity: props.quantity,
		price: props.price,
	};

	return (
		<div className='border-2 bg-white overflow-hidden border-light-2 rounded-xl grid grid-cols-1 divide-y p-0 w-[271px] group '>
			<div className='relative w-full h-[260px]'>
				<img src={getImageUrl(props.imageUrl)} alt={props.name} className='object-cover w-full h-full' />
				<div className='absolute flex flex-col items-center justify-between top-3 bottom-2 left-3'>
					<div className='flex flex-col items-center gap-4 '>
						<CheckBox handleOnChange={isSelectedHandler} checked={isSelected} />
						<button onClick={toggleFavorite}>
							{isFavorite ? <StarActiveIcon className='fill-neutral-1' /> : <StarIcon className='fill-hint' />}
						</button>
					</div>

					<div className='grid w-6 h-6 bg-white border rounded-full border-light-2 place-content-center'>
						<button>
							<CameraIcon className='w-[19px] h-[19px]' />
						</button>
					</div>
				</div>

				{/* Actions Btns */}
				<div className='absolute transition-all bg-white opacity-0 top-2 right-2 group-hover:opacity-100'>
					<Actions />
				</div>
			</div>
			<div className='flex items-end justify-between p-3'>
				<div className='space-y-1'>
					<h2 className='title'>{props.name}</h2>
					<p className='subtitle'>{props.category}</p>
					<p className='paragraph'>{props.options} Options</p>
				</div>
				<button>
					<NextIcon className='fill-subtitle' />
				</button>
			</div>
			{Object.entries(info).map(([posterKey, posterValue]) => (
				<div className='flex justify-between p-3' key={posterKey}>
					<p className='subheading'>{posterKey}</p>
					<p className='paragraph'>{posterValue}</p>
				</div>
			))}
		</div>
	);
}

function Actions() {
	return (
		<div className='flex flex-col gap-3 px-2 py-1 card'>
			<button>
				<ViewIcon className='fill-subtitle' />
			</button>
			<button>
				<EditIcon className='fill-subtitle' />
			</button>
			<button>
				<CopyIcon className='fill-subtitle' />
			</button>
			<button>
				<MoreIcon className='fill-subtitle' />
			</button>
		</div>
	);
}
