// import { platform } from 'os';
import { useTranslation } from 'react-i18next';
import { Button, ToggleSwitch } from 'src/app/components/optimized';

import { getImageUrl } from 'src/app/utils';
import { AddFillIcon, EditIcon, LinkIcon } from 'src/app/utils/icons';
// interface Platform {
// 	id: number;
// 	imageUrl: string;
// 	platformName: string;
// 	description: string;
// }

// interface ControlCardProps {
// 	platform: Platform;
// 	onCardClick: (platform: Platform) => void
// }

// export default function ControlCard({ platform, onCardClick }:ControlCardProps) => {

// 	const {id,imageUrl,platformName,description} = platform

// 	return (
// 		<div className='flex gap-3 p-3 bg-white border rounded-lg border-borders-lines'>
// 			<div className='size-[60px] grid place-items-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden p-3'>
// 				<img src={getImageUrl(imageUrl)} alt={platformName} className='object-cover w-full' />
// 			</div>
// 			<div className='flex flex-col justify-between gap-1'>
// 				<div className='flex flex-col items-start'>
// 					<h3 className='mb-2 text-title font-semibold'>{platformName}</h3>
// 					<Button
// 						variant='link'
// 						RightIcon={LinkIcon}
// 						// onClick={}
// 					>
// 						Learn More
// 					</Button>
// 					<p className='paragraph text-subtitle mb-3'>{description}</p>
// 				</div>
// 				<div>
// 					{activated ? (
// 						<div className='flex justify-between'>
// 							<Button variant='tertiary' LeftIcon={EditIcon} onClick={clickBtn}>
// 								Add ID
// 							</Button>
// 							<span className='mt-5'>
// 								<ToggleSwitch checked />
// 							</span>
// 						</div>
// 					) : (
// 						<Button variant='tertiary' LeftIcon={AddFillIcon} onClick={() => onCardClick(id)}>
// 							Add ID
// 						</Button>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default function ControlCard({ platform, onOpenPopup, isActive }) {
	const { t } = useTranslation();
	return (
		<div className='flex gap-3 p-3 bg-white border rounded-lg border-borders-lines'>
			<div className='size-[60px] grid place-items-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden p-3'>
				<img
					src={getImageUrl(platform.imageUrl)}
					alt={platform.platformName}
					className='object-cover w-full'
				/>
			</div>
			<div className='flex flex-col justify-between gap-1'>
				<div className='flex flex-col items-start'>
					<h3 className='mb-2 text-title font-semibold'>{platform.platformName}</h3>
					<Button
						variant='link'
						RightIcon={LinkIcon}
						// onClick={}
						text={t('Learn more')}
						// text={t('Export')}
					/>
					<p className='paragraph text-subtitle mb-3'>{platform.description}</p>
				</div>
				<div>
					{isActive ? (
						<div className='flex justify-between'>
							<Button
								variant='tertiary'
								LeftIcon={EditIcon}
								onClick={() => onOpenPopup(platform.id)}
							>
								Add ID
							</Button>
							<span className='mt-5'>
								<ToggleSwitch checked />
							</span>
						</div>
					) : (
						<Button
							variant='tertiary'
							LeftIcon={AddFillIcon}
							onClick={() => onOpenPopup(platform.id)}
						>
							Add ID
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
