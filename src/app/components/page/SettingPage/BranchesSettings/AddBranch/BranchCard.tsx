import { Button } from 'src/app/components/optimized';
import { EditIcon, RemoveIcon, ViewIcon } from 'src/app/utils/icons';
import { Branch } from 'src/pages/SettingsPage/BranchesSettings';

export default function BranchCard({ name, address, city, country, phone }: Branch) {
	const iconClassName = 'fill-pri-dark cursor-pointer';
	return (
		<div className=' flex justify-between  serviceDetails-sharedClass p-5'>
			<div className='flex-col-top-section-pages gap-2'>
				<h2 className='title'>{name}</h2>
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
				<Button variant='tertiary' text='View inventory' LeftIcon={ViewIcon} />
			</div>
		</div>
	);
}