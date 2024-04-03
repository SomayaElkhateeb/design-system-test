import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';

import { mostPopularApps } from 'src/app/utils/constants';

const MostPopularList = () => {
	//  hooks
	const { t } = useTranslation()
	return (
		<>
			<div className='mb-5'>
				<h2 className='title text-lg'>{t("Most popular")}</h2>
				<p className='paragraph text-subtitle'>
					{t("For more information about setup guide")}{' '}
					<Link className='text-primary' to=''>
						{t("Learn more")}
					</Link>
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{mostPopularApps.map((app) => (
					<BigAppsCard key={app.id} {...app} />
				))}
			</div>
		</>
	);
};

export default MostPopularList;

const BigAppsCard = ({ image, name, description, url, status }) => {
	const statusPadge = status === 'available' ? 'free' : 'installed';
	return (
		<Link to={url} rel='noopener noreferrer'>
			<div className='cursor-pointer border border-border-color p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white min-h-[379px]'>
				<div className='flex flex-col items-start'>
					<div className='border border-border-color w-full h-[213px] grid place-content-center  rounded-lg'>
						<img src={image} alt={name} className='h-[180px]' />
					</div>
					<h2 className='mt-4 title text-[16px]'>{name}</h2>
					<p className='paragraph mt-2'>{description}</p>
					<img
						src={getImageUrl(`padges/${statusPadge}.svg`)}
						alt='status'
						className='h-7 mt-3'
					/>
				</div>
			</div>
		</Link>
	);
};

// lines
// bg 2
