//? Unfinished tasks
//! =================
// todo refactoring the buttons

import { ClockIcon } from 'src/app/utils/icons';
import { getImageUrl } from 'src/app/utils';

/**
 * @param {{
 *  free: boolean;
 *  daysLeft: number;
 *  title: string;
 *  description: string;
 * }} props
 *
 * @example
 *
 * ```jsx
 * <TrialBanner
 * 	free={true}
 * 	daysLeft={3}
 * 	title="Free Trial Offer 1"
 * 	description="You're on free trial"
 * />
 * ```
 */
export default function TrialBanner({ free, daysLeft, title, description }) {
	return (
		<div className='px-6 py-[14px] bg-pri-dark rounded-lg text-white'>
			<div className='mb-[5px]'>
				{!free ? (
					<div className='flex items-center gap-1 '>
						<ClockIcon className='fill-white' />
						<p className='text-white paragraph'>
							Ends in {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
						</p>
					</div>
				) : (
					<img src={getImageUrl('padges/premium-light.svg')} alt='premium' />
				)}
			</div>
			<div className='mb-5'>
				<h2 className='title text-clamp-title leading-8 text-white mb-0.5 '>{title}</h2>
				<p className='paragraph text-[16px] leading-6	 text-inactive'>{description}</p>
			</div>
			<div className='flex gap-4'>
				<button className='btn-pri'>Subscribe now</button>
				<button className='text-white border-white btn-sec hover:bg-light-1/5 active:bg-light-2/5 disabled:bg-inactive/50 disabled:text-white'>
					Learn more
				</button>
			</div>
		</div>
	);
}
