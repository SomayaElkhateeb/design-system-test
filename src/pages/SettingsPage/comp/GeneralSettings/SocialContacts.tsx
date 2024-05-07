import { useTranslation } from 'react-i18next';

const SocialContacts = ({
	register,
	errors,
}: {
	register: (...args: any[]) => any;
	errors: string;
}) => {
	const { t } = useTranslation();
	return (
		<section className='global-cards'>
			<h3 className='text-title font-semibold'>{t('Social contacts')}</h3>

			<div className='w-[27rem] flex flex-col gap-7'>
				<input {...register('facebook')} placeholder='http://facebook.com/username' />
				<p className='text-red-600 text-sm'>{errors.facebook?.message || ''}</p>
				<input {...register('instagram')} placeholder='http://instagram.com/username' />
				<p className='text-red-600 text-sm'>{errors.instagram?.message || ''}</p>
				<input {...register('twitter')} placeholder='http://twitter.com/username' />
				<p className='text-red-600 text-sm'>{errors.twitter?.message || ''}</p>
				<input {...register('youtube')} placeholder='http://youtube.com/username' />
				<p className='text-red-600 text-sm'>{errors.youtube?.message || ''}</p>
			</div>
		</section>
	);
};

export default SocialContacts;
