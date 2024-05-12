import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LabelIcon } from 'src/app/components/optimized';

interface BigAppsCardProps {
	image: string;
	name: string;
	description: string;
	url: string;
	status: 'free' | 'installed' | string;
}

const BigAppsCard: React.FC<BigAppsCardProps> = ({ image, name, description, url, status }) => {
	let backgroundColor: string, textColor: string;
	switch (status) {
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
		<Link to={url} rel='noopener noreferrer'>
			<div className='cursor-pointer border border-border-color p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white min-h-[379px]'>
				<div className='flex flex-col items-start gap-[1rem]'>
					<div className='border border-border-color w-full h-[213px] grid place-content-center rounded-lg'>
						<img src={image} alt={name} className='h-[180px]' />
					</div>
					<div className='flex flex-col items-start gap-[.7rem]'>
						<h2 className=' title text-[16px]'>{name}</h2>
						<p className=' paragraph'>{description}</p>
						<LabelIcon
							text={status}
							backgroundColor={backgroundColor}
							textColor={textColor}
							icon={status === 'installed' ? <FaCheck size={10} color='#0B47D9' /> : null}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BigAppsCard;
