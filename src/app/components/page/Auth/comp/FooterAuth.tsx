import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';

const FooterAuth = () => {
	const language = UseLanguage();

	const date = new Date().getFullYear();
	return (
		<div className='px-15 mb-5'>
			<button className='text-primary'>{language === 'ar' ? 'دكان' : 'Dookan'}</button>{' '}
			<span>@ {date}</span>
		</div>
	);
};

export default FooterAuth;
