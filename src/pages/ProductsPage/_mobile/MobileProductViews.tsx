//? Unfinished task
//! ===============
// todo Action Button
import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { useTranslation } from 'react-i18next';
import { settingMenus } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/CustomersTable';

/**

 * <MobileProductViews
 *   name='DJI Mavic Pro 2'
 *   imageUrl='images/Vector.svg'
 *   category='Blankets'
 *   quantity={50}
 *   price='10000.00'
 * />
 */

interface ProductViewsProps {
	imageUrl: string;
	name: string;
	category: string;
	quantity: number;
	price: number;
	settingMenus?: settingMenus[];
}
export default function MobileProductViews({
	imageUrl,
	name,
	category,
	quantity,
	price,
	settingMenus,
}: ProductViewsProps) {
	const { selectedOption, handleSelect } = useSelectBox();
	const { t } = useTranslation();
	return (
		<div className='flex justify-between bg-white'>
			<div className='flex gap-1 items-center'>
				<div className='box-photo size-12'>
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
				{settingMenus && settingMenus?.length > 0 && (
					<ThreeDotsButton
						sortMenus={settingMenus}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				)}
				<p className='paragraph'>SAR {price}</p>
			</div>
		</div>
	);
}
