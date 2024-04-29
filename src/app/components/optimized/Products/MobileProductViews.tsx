//? Unfinished task
//! ===============
// todo Action Button
import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from '../Buttons/ThreedotsButton';
import useSelectBox from '../Menu/useSelectBox';
import { useTranslation } from 'react-i18next';
import { RemoveIcon } from 'src/app/utils/icons';

/**

 * <MobileProductViews
 *   name='DJI Mavic Pro 2'
 *   imageUrl='images/Vector.svg'
 *   category='Blankets'
 *   quantity={50}
 *   price='10000.00'
 * />
 */

const settingMenus = [{ text: 'Delete product', icon: <RemoveIcon className='fill-error' /> }];
interface ProductViewsProps {
	imageUrl: string;
	name: string;
	category: string;
	quantity: number;
	price: number;
}
export default function MobileProductViews({
	imageUrl,
	name,
	category,
	quantity,
	price,
}: ProductViewsProps) {
	const { selectedOption, handleSelect } = useSelectBox();
	const { t } = useTranslation();
	return (
		//! w-[343px] This class can be omitted if the component takes up the maximum width of the phone.
		<div className='flex justify-between bg-white'>
			<div className='flex gap-1 items-center'>
				<div className='size-[60px] rounded-lg border border-light-2 overflow-hidden'>
					<img src={getImageUrl(imageUrl)} alt={name} />
				</div>
				<div className='flex flex-col justify-around '>
					<h2 className='title'>{name}</h2>
					<p className='subtitle'>{category}</p>
					<p className='paragraph'>
						{t('Qty')}: {quantity}
					</p>
				</div>
			</div>
			<div className='flex flex-col items-end justify-between'>
				<ThreeDotsButton
					sortMenus={settingMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
				<p className='paragraph'>SAR {price}</p>
			</div>
		</div>
	);
}
