import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { IconProps } from 'src/app/utils/icons';

/**
 * LinkCards component displays a card with a title, an optional description, and an icon wrapped in a link.
 *
 * @param {object} props - Props for the LinkCards component.
 * @param {string} props.to - The destination URL for the link.
 * @param {string} props.title - The title of the card.
 * @param {JSX.Element} props.Icon - The icon component to be displayed.
 * @param {string} [props.description] - Optional description to be displayed below the title.
 * @returns {JSX.Element} LinkCards component.
 */

interface LinkCardsProps {
	path: string;
	title: string;
	Icon: FC<IconProps>;
	description?: string;
}
const LinkCards = ({ path, title, Icon, description }: LinkCardsProps) => {
	return (
		<Link to={path} relative='path' className='rounded-lg bg-brand-gradient p-px'>
			<div className='rounded-[calc(0.5rem-1px)] p-3 bg-white flex items-start gap-3 min-h-24 h-full'>
				<div className='size-11 flex-none rounded-full bg-title/5 flex justify-center items-center'>
					<Icon className='fill-pri-dark' />
				</div>
				<div>
					<h2 className='title mb-3'>{title}</h2>
					{description && <p className='text-subtitle paragraph'>{description}</p>}
				</div>
			</div>
		</Link>
	);
};

export default LinkCards;



