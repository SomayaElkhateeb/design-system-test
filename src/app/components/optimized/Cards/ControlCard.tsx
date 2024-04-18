import { Button, ToggleSwitch } from 'src/app/components/optimized';
import { AddFillIcon, EditIcon, LinkIcon } from 'src/app/utils/icons';

/**
 * @param {object} props - Props for the AppsCard component
 * @param {string} props.image - The image URL for the app
 * @param {string} props.name - The name of the app
 * @param {string} props.description - The description of the app
 * @param {string} props.status - The status of the app (available or installed)
 * @param {string} props.url - The URL to navigate to when clicked
 * @param {boolean} props.isOpen
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

interface ControlCardProps {
	image: string;
	name: string;
	url: string;
	description: string;
	isOpen: boolean;
}

const ControlCard: React.FC<ControlCardProps> = ({ image, name, url, description, isOpen, clickBtn }) => {
	return (
		<div className='flex gap-3 p-3 bg-white border rounded-lg border-border-color'>
			<div className='size-[60px] grid place-content-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden p-3'>
				<img src={image} alt={name} className='object-cover w-full' />
			</div>
			<div className='flex flex-col justify-between'>
				<div>
					<h3 className='mb-1 text-title font-semibold'>{name}</h3>
					<Button variant='link' RightIcon={LinkIcon} onClick={url}>
						Learn More
					</Button>
				</div>
				<p className='paragraph text-subtitle mt-1 mb-5'>{description}</p>

				<div>
					{isOpen ? (
						<div className='flex justify-between'>
							<Button variant='tertiary' LeftIcon={EditIcon} onClick={clickBtn}>
								Add ID
							</Button>

							<span className='mt-5'>
								<ToggleSwitch checked />
							</span>
						</div>
					) : (
						<Button variant='tertiary' LeftIcon={AddFillIcon} onClick={clickBtn}>
							Add ID
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ControlCard;
