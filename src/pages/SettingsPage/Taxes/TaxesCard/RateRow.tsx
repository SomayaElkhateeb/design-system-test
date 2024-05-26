import { useTranslation } from 'react-i18next';

import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import { MoreIcon, RemoveIcon } from 'src/app/utils/icons';
import { Rate } from './useTaxPrograms';

interface RateRowProps {
	rate: Rate;
}
export default function RateRow({ rate }: RateRowProps) {
	const { t } = useTranslation();
	const options = [
		{
			id: 1,
			text: t('delete rate'),
			icon: <RemoveIcon className='fill-pri-dark' />,
		},
	];
	return (
		<div className='flex justify-between items-center  h-15'>
			<div className='grid gap-1'>
				<h3 className='title text-sm'>{rate.category}</h3>
				<p className='text-subtitle paragraph'>{rate.condition}</p>
			</div>
			<div className='grid gap-1 justify-items-end'>
				<MenuOptions
					btn={<MoreIcon className='fill-subtitle' />}
					options={options}
					handle={() => console.log('uninstall')}
				/>
				{rate.deliveryTime && <p className='text-subtitle paragraph'>{rate.deliveryTime}</p>}
			</div>
		</div>
	);
}
