import useLanguage from 'src/app/utils/hooks/useLanguage';

export const CustomHookForHandelCurrencyDirection = (amount: string, currency_symbol: string) => {
	const { language } = useLanguage();
console.log(language)
	return language === 'ar' ? `${amount} ${currency_symbol}` : `${currency_symbol} ${amount}`;
};
