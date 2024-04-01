// Done refactoring to type
import { Link } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';

/**
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.name
 * @param {string} props.description
 * @param {string} props.image
 * @param {string} props.status
 * @param {string} props.url
 */
export default function AppsCard(props) {
	const statusBadge = props.status === 'available' ? 'free' : 'installed';

	return (
		<Link
			to={props.url}
			className='flex gap-3 p-3 bg-white border rounded-lg shadow-md border-border-color'
		>
			<div className='size-[60px] grid place-content-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden'>
				<img src={props.image} className='object-cover w-full' />
			</div>
			<div>
				<h3 className='mb-2 title'>{props.name}</h3>
				<p className='paragraph text-subtitle'>{props.description}</p>
				<img
					src={getImageUrl(`$padges/${statusBadge}.svg`)}
					alt='status'
					className='mt-3 h-7'
				/>
			</div>
		</Link>
	);
}
