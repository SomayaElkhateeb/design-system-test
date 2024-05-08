import { useTranslation } from 'react-i18next';

import InstallCard from './InstallCard';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { BackIcon, NextIcon } from 'src/app/utils/icons';
import { AppsWrapperProps } from '../../comp/useAppStore';

export default function InstallCardWrapper({ socialApps, title, onButtonClick }: AppsWrapperProps) {
	const { t } = useTranslation();
	const language = UseLanguage();
	return (
		<div className='grid gap-4 bg-white p-4 rounded-md border border-borders-lines'>
			<div className='flex justify-between'>
				<h2 className='text-lg font-semibold text-title'>{title}</h2>
				<div className='flex items-center'>
					<button className='text-sm font-semibold text-title mx-1' onClick={onButtonClick}>
						{t('View All')}
					</button>
					{language === 'ar' ? (
						<BackIcon className='fill-pri-dark' />
					) : (
						<NextIcon className='fill-pri-dark' />
					)}
				</div>
			</div>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{socialApps.slice(0, 4).map((appData) => (
					<div className='col-span-1' key={appData.id}>
						<InstallCard {...appData} />
					</div>
				))}
			</div>
		</div>
	);
}
// className='text-lg font-semibold text-title'
