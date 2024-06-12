import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useLanguageDirection() {
	// const { i18n } = useTranslation();
	// const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
	// 	return localStorage.getItem('language') || i18n.language;
	// });

	// useEffect(() => {
	// 	i18n.changeLanguage(currentLanguage);
	// 	localStorage.setItem('language', currentLanguage);
	// 	document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
	// }, [currentLanguage, i18n]);

	// const toggleLanguage = () => {
	// 	setCurrentLanguage((prevLanguage) => (prevLanguage === 'ar' ? 'en' : 'ar'));
	// };
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || i18n.language;
  });
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage, i18n]);
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', newLanguage);
    window.location.reload();  // Reload the page to apply changes
  };
	return { currentLanguage, toggleLanguage };
}
