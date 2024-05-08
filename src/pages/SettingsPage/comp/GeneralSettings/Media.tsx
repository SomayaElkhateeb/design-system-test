import { useTranslation } from 'react-i18next';
import LogoUpload from 'src/app/components/optimized/MediaUpload/LogoUpload';

const Media = () => {
	const { t } = useTranslation();
	return (
		<section className='global-cards'>
			<h3 className='text-title font-semibold'>{t('Media')}</h3>

			<div className='w-[27rem] flex flex-col gap-7'>
				<div>
					<p className='text-title text-sm pb-4'>Logo</p>
					<LogoUpload />
				</div>
				<div>
					<p className='text-title text-sm pb-4'>Icon</p>
					<LogoUpload />
				</div>
			</div>
		</section>
	);
};

export default Media;
