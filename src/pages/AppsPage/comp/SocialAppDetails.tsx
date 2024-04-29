import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Button, LabelIcon } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { BackIcon } from 'src/app/utils/icons';
import data from './data.json';

interface SocialAppData {
	name: string;
	image: string;
	description: string;
	videoUrl: string;
	features: { title: string; description: string }[];
	posters?: { [key: string]: string };
	backgroundColor: [string, string];
	status: 'free' | 'installed';
	mostPopular?: boolean;
}
const SocialAppDetails: React.FC = () => {
	const { platform } = useParams<string>();

	const [socialPlatform, setSocialPlatform] = useState<SocialAppData | null>(null);
	const navigate = useNavigate();
	const { t } = useTranslation();

	useEffect(() => {
		const fetchSocialPlatformContent = () => {
			const content = data.apps[platform];
			setSocialPlatform(content);
		};
		fetchSocialPlatformContent();
	}, [platform]);

	if (!socialPlatform) {
		return <div>Loading...</div>;
	}

	const { name, image, description, videoUrl, posters, features, backgroundColor, status } =
		socialPlatform;
	const [fColor, sColor] = backgroundColor;

	let bgColor, textColor;
	switch (status) {
		case 'free':
			bgColor = '#EEF9F5';
			textColor = '#49A882';
			break;
		case 'installed':
			bgColor = '#F3F7FF';
			textColor = '#0B47D9';
			break;
		default:
			bgColor = 'gray';
			textColor = 'black';
			break;
	}

	const language = UseLanguage();

	return (
		<div>
			<div className='flex justify-between px-4 py-3'>
				<div className='flex items-center'>
					<Link to={-1}>{language === 'ar' ? <IoIosArrowForward /> : <BackIcon />}</Link>
					<h2 className='text-lg font-semibold capitalize text-title'>{name}</h2>
				</div>
				<Button onClick={() => navigate(`/marketing/${name}/${name}-setup`)}>
					{t('Install now')}
				</Button>
			</div>

			<div
				style={{
					backgroundImage: `linear-gradient(313.9deg, ${fColor} -2.74%, ${sColor} 140.56%)`,
				}}
				className='p-5 flex justify-between h-[180px] max-[992px]:flex-col max-[992px]:h-64 max-[992px]:items-center max-[992px]:mb-32'
			>
				<div className='flex mr-3 max-[992px]:mb-5'>
					<div className='size-[120px] min-w-[120px] mr-5 grid place-content-center bg-white rounded-lg'>
						<img src={getImageUrl(image)} alt={name} className='w-[90px] object-cover' />
					</div>
					<div className='max-w-[600px] text-white'>
						<h2 className='mb-3 text-lg font-semibold text-white capitalize'>{name}</h2>
						<p className='text-sm font-normal text-white'>{description}</p>
						<div className='flex'>
							<LabelIcon
								text={status}
								backgroundColor={bgColor}
								textColor={textColor}
								icon={status === 'installed' ? <FaCheck size={10} color='#0B47D9' /> : null}
							/>
						</div>
					</div>
				</div>
				<div className='-mr-4 hidden lg:block'>
					<iframe width='384' height='216' src={videoUrl} title={name} allowFullScreen />
				</div>
			</div>

			<div className='p-5'>
				<FeatureList features={features} />
				<PosterList posters={posters} />
			</div>
		</div>
	);
};

export default SocialAppDetails;

interface Feature {
	title: string;
	description: string;
}

interface Poster {
	[key: string]: string;
}

interface FeatureListProps {
	features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
	<div>
		{features.map((feature, index) => (
			<div key={index} className='my-4 max-w-[600px]'>
				<h2 className='text-lg font-bold text-pri-dark'>{feature.title}</h2>
				<p className='mt-2 text-pri-dark'>{feature.description}</p>
			</div>
		))}
	</div>
);

const PosterList: React.FC<{ posters?: Poster }> = ({ posters }) => (
	<div className='flex flex-wrap justify-between gap-7'>
		{posters ? (
			<div className='grid  gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{Object.entries(posters).map(([key, value]) => (
					<div key={key} className='bg-gray-200 w-[350px] h-[250px] '>
						<img src={getImageUrl(value)} alt={key} className='object-cover w-full h-full' />
					</div>
				))}
			</div>
		) : (
			<div className='grid  gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{[...Array(4)].map((_, index) => (
					<div key={index} className='col-span-1 bg-gray-200 w-[450px] h-[250px]'></div>
				))}
			</div>
		)}
	</div>
);
