import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { EditIcon } from 'src/app/utils/icons';

interface AppData {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	status: string;
	url: string;
}

export default function InstallCard({ name, imageUrl, url }: AppData) {
	const language = UseLanguage();
	const { t } = useTranslation();

	return (
		<div className='flex gap-3 global-cards flex-row'>
			<div className='grid place-items-center size-[40px] rounded-lg border border-light-2 overflow-hidden'>
				<img src={getImageUrl(imageUrl)} className='object-cover w-5/6' />
			</div>
			<div className='flex-col-global gap-2'>
				<h2 className='title'>{name}</h2>
				<Link to={url}>
					<Button
						text={t('Open Setup')}
						variant='link'
						LeftIcon={EditIcon}
						className={language === 'ar' ? 'flex-row-reverse' : ''}
					/>
				</Link>
			</div>
		</div>
	);
}
