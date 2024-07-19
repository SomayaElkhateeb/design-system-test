//? Unfinished tasks
//! =================
// todo Actions Button
// todo Make the Component more clean
// todo Trigger image preview logic

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	CameraIcon,
	CopyIcon,
	EditIcon,
	NextIcon,
	StarActiveIcon,
	StarIcon,
	ViewIcon,
} from 'src/app/utils/icons';

import ThreeDotsButton from '../Buttons/ThreedotsButton';
import useSelectBox from '../Menu/useSelectBox';
import CustomTableBodyCheckbox from '../UiKits/CustomTableBodyCheckbox';

/**
 * @param {{
 *   id: string;
 *   name?: string;
 *   imageUrl: string;
 *   category?: string;
 *   options?: number;
 *   sku: string;
 *   quantity?: number;
 *   price?: number;
 *   array:string[];
 *   setArray:(e:string[])=>void;
 *   settingMenus:import('../Buttons/ActionsComp').menuType[]
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
 * ```
 */
export default function ProductCard(props) {
	//  hooks
	const { t } = useTranslation();
	const [isFavorite, setIsFavorite] = useState(false);

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
	}

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	const info = {
		sku: props.sku,
		quantity: props?.quantity && props?.quantity > 0 ? props.quantity : t('Out of stock'),
		price: props.price,
	};

	return (
		<div className='border-2 bg-white overflow-hidden border-light-2 rounded-xl  divide-y p-0  group '>
			<div className='relative w-full h-[260px]'>
				{props.imageUrl && (
					<img src={props.imageUrl} alt={props.name} className='object-cover w-full h-full' />
				)}
				<div className='absolute flex flex-col items-center justify-between top-3 bottom-2 left-3'>
					<div className='flex flex-col items-center gap-4 '>
						<CustomTableBodyCheckbox array={props.array} setArray={props.setArray} id={props.id} />
						<button onClick={toggleFavorite}>
							{isFavorite ? (
								<StarActiveIcon className='fill-neutral-1' />
							) : (
								<StarIcon className='fill-hint' />
							)}
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
					<Actions
						settingMenus={props.settingMenus}
						selectedOption={selectedOption}
						handleSelect={handleSelect}
					/>
				</div>
			</div>
			<div className='flex items-end justify-between p-3'>
				<div className='space-y-1'>
					<h2 className='title'>{props.name}</h2>
					<p className='subtitle'>{props.category}</p>
					{props.options && <p className='paragraph'>{props.options} Options</p>}
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

/**
 * @param {{
*   settingMenus:import('../Buttons/ActionsComp').menuType[]
* selectedOption:string
* handleSelect:(e:string)=>void
* }} props
*
* @example
*
* ```jsx

* ```
*/
function Actions(props) {
	return (
		<div className='flex flex-col gap-3 px-2 py-1 card items-center '>
			<ViewIcon className='fill-subtitle' />

			<EditIcon className='fill-subtitle' />

			<CopyIcon className='fill-subtitle' />

			<ThreeDotsButton
				sortMenus={props.settingMenus}
				selectedOption={props.selectedOption}
				handelSelect={props.handleSelect}
			/>
		</div>
	);
}
