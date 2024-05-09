import { useTranslation } from 'react-i18next';
import { generalSettingsInterface } from './GeneralSettings';
import { UseFormReturn } from 'react-hook-form';

const Media = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	const { t } = useTranslation();
	return (
		<section className='serviceDetails-sharedClass flex-col-top-section-pages p-[1.2rem] md:w-[70%] '>
			<h3 className='title'>{t('Media')}</h3>
			<div className='flex-col-top-section-pages gap-[1rem]'></div>
		</section>
	);
};

export default Media;
