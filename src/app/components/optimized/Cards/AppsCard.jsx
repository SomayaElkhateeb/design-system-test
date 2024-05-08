import { Link } from 'react-router-dom';
import { FaTelegram } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { LabelIcon } from 'src/app/components/optimized';

/**
 * @param {object} props - Props for the AppsCard component
 * @param {string} props.image - The image URL for the app
 * @param {string} props.name - The name of the app
 * @param {string} props.description - The description of the app
 * @param {string} props.status - The status of the app (available or installed)
 * @param {string} props.url - The URL to navigate to when clicked
 *
 */
export default function AppsCard(props) {
	let backgroundColor, textColor;
	switch (props.status) {
		case 'free':
			backgroundColor = '#EEF9F5';
			textColor = '#49A882';
			break;
		case 'installed':
			backgroundColor = '#F3F7FF';
			textColor = '#0B47D9';
			break;
		default:
			backgroundColor = 'gray';
			textColor = 'white';
			break;
	}

	return (
		// <Link
		// 	to={props.url}
		// 	className='flex gap-3 p-3 bg-white border rounded-lg shadow-md border-borders-lines'
		// >
		// 	<div className='size-[60px] grid place-items-center min-w-[60px] rounded-lg border border-light-2 overflow-hidden' />

		<Link to={props.url} className='flex gap-3 p-3 bg-white border rounded-lg shadow-md'>
			<div className='size-[60px]  min-w-[60px] flex items-center'>
				<img src={props.image} className='object-cover w-full' />
			</div>
			<div className='flex flex-col gap-[1rem]'>
				<h3 className='mb-2 title'>{props.name}</h3>
				<p className='paragraph text-subtitle'>{props.description}</p>

				<div className='flex'>
					<LabelIcon
						text={props.status}
						backgroundColor={backgroundColor}
						textColor={textColor}
						icon={props.status === 'installed' ? <FaCheck size={10} color='#0B47D9' /> : null}
					/>
				</div>
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

//  Usage Example:
//   <AppsCard
//        image="/path/to/image.jpg"
//        name="Telegram"
//        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//        status="available"
//        url="/app/telegram"
//      />
