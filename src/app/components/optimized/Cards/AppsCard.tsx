import { Link } from 'react-router-dom';

import Badge from '../UiKits/Badge';
import { getImageUrl } from 'src/app/utils';
import { AppData } from 'src/pages/AppsPage/_comp/useAppStore';

/**
 * Usage Example:
 * import AppsCard from "./AppsCard";
 *
 * function MyComponent() {
 *   return (
 *     <AppsCard
 *       imageUrl="/path/to/image.jpg"
 *       name="Telegram"
 *       description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
 *       status="available"
 *       url="/app/telegram"
 *     />
 *   );
 * };
 */

export default function AppsCard({ name, description, status, imageUrl, url }: AppData) {
	return (
		<Link to={url} className='flex gap-3 global-cards flex-row'>
			<div className='flex justify-center items-center size-[60px] min-w-[60px] rounded-lg border border-light-2 overflow-hidden'>
				<img src={getImageUrl(imageUrl)} className='object-cover w-5/6' />
			</div>
			<div className='flex-col-global gap-[.75rem]'>
				<div className='flex-col-global gap-[.25rem]'>
					<h3 className='title'>{name}</h3>
					<p className='paragraph text-subtitle'>{description}</p>
				</div>
				<Badge status={status} />
			</div>
		</Link>
	);
}
