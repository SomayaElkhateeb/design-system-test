import logoEn from 'src/app/assets/brand/en-light.svg';
import logoAr from 'src/app/assets/brand/ar-light.svg';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';

const HeaderAuth = () => {
	const language = UseLanguage();

	const handelLanguage = () => {
		if (language === 'ar') {
			window.location.reload();
			localStorage.setItem('language', 'en');
		} else {
			window.location.reload();
			localStorage.setItem('language', 'ar');
		}
	};
	return (
		<header className='h-[4.4rem] px-15 flex justify-between items-center'>
			<div className='h-12 w-48'>
				{language === 'ar' ? <img src={logoAr} alt='دكان' /> : <img src={logoEn} alt='Dookan' />}
			</div>
			<button className='text-subtitle' onClick={handelLanguage}>
				{language === 'ar' ? 'English' : 'العربية'}
			</button>
		</header>
	);
};

export default HeaderAuth;
