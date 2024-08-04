import { useTranslation } from 'react-i18next';

import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import { MoreIcon } from 'src/app/utils/icons';
import { Rate } from './useTaxPrograms';
import { LiaTrashAlt } from 'react-icons/lia';

interface RateRowProps {
	rate: Rate;
}
export default function RateRow({ rate }: RateRowProps) {
	const { t } = useTranslation();

	return (
		<div className='flex justify-between items-center  h-15'>
			<div className='grid gap-1'>
				<h3 className='title text-sm'>{rate.category}</h3>
				<p className='text-subtitle paragraph'>{rate.condition}</p>
			</div>
			<div className='grid gap-1 justify-items-end'>
				<MenuOptions
					btn={<MoreIcon className='fill-subtitle' />}
					options={[
						{
							id: 1,
							text: t('delete rate'),
							icon: <LiaTrashAlt size='28' className='fill-pri-dark' />,
							click: console.log('uninstall')
						},
					]}

				/>
				{rate.deliveryTime && <p className='text-subtitle paragraph'>{rate.deliveryTime}</p>}
			</div>
		</div>
	);
}
