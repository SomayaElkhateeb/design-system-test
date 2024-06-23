import { Link } from "react-router-dom";

import { getImageUrl } from "src/app/utils";
import useLanguageDirection from "src/app/utils/hooks/useLangDirection";


export function RegisterHeader() {
	const { toggleLanguage, currentLanguage } = useLanguageDirection();
	// ar-light.svg
	// en-light.svg
	const brandImageUrl = getImageUrl(`brand/${currentLanguage}-light.svg`);
	return (
		<header className='flex justify-between items-center w-full h-[4.4rem] py-2 mb-15'>
			<img src={brandImageUrl} alt='Dookan' className='h-8' />
			<button className='paragraph text-subtitle' onClick={toggleLanguage}>
				{currentLanguage === 'ar' ? 'English' : 'العربية'}
			</button>
		</header>
	);
}

export function RegisterFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='flex items-center h-[4.4rem]'>
			<p className='paragraph text-title'>
				<Link to='/' className='text-primary'>
					Dookan
				</Link>
				&nbsp;&copy; {currentYear}
			</p>
		</footer>
	);
}

export function RegisterImage({ path }: { path: string }) {
	return (
		<div className='grid place-content-center h-full'>
			<img src={getImageUrl(path)} alt='Create Store' className='w-full' />
		</div>
	);
}

