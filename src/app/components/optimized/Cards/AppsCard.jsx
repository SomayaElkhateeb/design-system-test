import { Link } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';
import { FaTelegram } from 'react-icons/fa';

/**
 * @param {object} props - Props for the AppsCard component
 * @param {string} props.image - The image URL for the app
 * @param {string} props.name - The name of the app
 * @param {string} props.description - The description of the app
 * @param {string} props.status - The status of the app (available or installed)
 * @param {string} props.url - The URL to navigate to when clicked
 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 *
 * import AppsCard from "./AppsCard";
 * import { FaTelegram } from "react-icons/fa";
 *
 * export default function MyComponent() {
 *   return (
 *     <AppsCard
 *       image="/path/to/image.jpg"
 *       name="Telegram"
 *       description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
 *       status="available"
 *       url="/app/telegram"
 *     />
 *   );
 * };
 * ```
 */
export default function AppsCard(props) {
	const statusPadge = props.status === 'available' ? 'free' : 'installed';

	return (
		<Link
			to={props.url}
			className='flex gap-3 p-3 bg-white border rounded-lg shadow-md border-borders-lines'
		>
			<div className='size-[60px] grid place-items-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden'>
				<img src={props.image} className='object-cover w-full' />
			</div>
			<div>
				<h3 className='mb-2 title'>{props.name}</h3>
				<p className='paragraph text-subtitle'>{props.description}</p>
				<img src={getImageUrl(`$padges/${statusPadge}.svg`)} alt='status' className='mt-3 h-7' />
			</div>
		</Link>
	);
}

AppsCard.defaultProps = {
	image: <FaTelegram size={48} color='#2EA6DA' />,
	heading: 'Telegram',
	paragraph:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta,eaque ducimus perspiciatis odio repudiandae nisi cupiditate doloribus',
	label: 'free',
};
