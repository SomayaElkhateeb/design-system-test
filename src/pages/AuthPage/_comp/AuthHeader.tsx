import { getImageUrl } from 'src/app/utils';
import useLanguageDirection from 'src/app/utils/hooks/useLangDirection';

export default function AuthHeader() {
	// const { currentLanguage, toggleLanguage } = useLangDirection();
	const { toggleLanguage, currentLanguage } = useLanguageDirection();
	// ar-light.svg
	// en-light.svg
	const brandImageUrl = getImageUrl(`brand/${currentLanguage}-light.svg`);
	return (
		<header className='flex justify-between items-center w-full h-[4.4rem]'>
			<img src={brandImageUrl} alt='Dookan' className='h-12' />
			<button className='paragraph text-subtitle' onClick={toggleLanguage}>
				{currentLanguage === 'ar' ? 'English' : 'العربية'}
			</button>
		</header>
	);
}
