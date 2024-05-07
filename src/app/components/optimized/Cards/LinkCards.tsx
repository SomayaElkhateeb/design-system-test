import { Link } from 'react-router-dom';

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

const LinkCards = ({
	to,
	title,
	Icon,
	description,
}: {
	to: string;
	title: string;
	Icon: any;
	description?: string;
}) => {
	return (
		<>
			{description ? (
				<Link to={to}>
					<div className='rounded-lg bg-brand-gradient p-px'>
						<div className='rounded-[calc(0.5rem-1px)] p-3 bg-white flex gap-2 min-h-24'>
							<div className='size-10 rounded-full bg-light-1 flex justify-center items-center'>
								<Icon className='fill-pri-dark' />
							</div>
							<div>
								<p className='font-semibold text-title text-sm space-y-2'>{title}</p>
								<p className='text-subtitle text-xs leading-relaxed'>{description}</p>
							</div>
						</div>
					</div>
				</Link>
			) : (
				<Link to={to}>
					<div className='rounded-lg bg-brand-gradient p-px '>
						<div className='rounded-[calc(0.5rem-1px)] p-3 bg-white flex flex-col'>
							<div className='size-10 rounded-full bg-light-1 flex justify-center items-center'>
								<Icon className='fill-pri-dark' />
							</div>
							<p className='font-semibold text-title space-y-2'>{title}</p>
						</div>
					</div>
				</Link>
			)}
		</>
	);
};

export default LinkCards;
