import { useTranslation } from 'react-i18next';

import { Button } from 'src/app/components/optimized';
import { EditIcon, RemoveIcon, ViewIcon } from 'src/app/utils/icons';
import { Branch } from './useBranch';

export default function BranchCard({ name, address, city, country, phone, isMain }: Branch) {
	const iconClassName = 'fill-pri-dark cursor-pointer';
	const { t } = useTranslation();

	return (
		<div className='flex justify-between cardDetails-sharedClass p-5'>
			<div className='flex-col-global gap-2'>
				<div className='flex items-center gap-1.5'>
					<h2 className='title'>{name}</h2>
					{isMain && (
						<span className='bg-borders-lines paragraph text-subtitle p-1 px-2 rounded-sm '>
							{t('Main')}
						</span>
					)}
				</div>
				<div>
					<p className='paragraph'>{address}</p>
					<p className='paragraph'>{city}</p>
					<p className='paragraph text-subtitle'>{country}</p>
					<p className='paragraph'>{phone}</p>
				</div>
			</div>
			<div className='flex flex-col justify-between items-end'>
				<div className='flex items-center gap-5 '>
					<div>
						<RemoveIcon className={iconClassName} />
					</div>
					<div>
						<EditIcon className={iconClassName} />
					</div>
				</div>
				<Button variant='tertiary' text={t('View Inventory')} LeftIcon={ViewIcon} />
			</div>
		</div>
	);
}