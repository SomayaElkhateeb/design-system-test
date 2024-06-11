export const UseLanguage = () => {
	let language: null | undefined | string = undefined;
	if (typeof window !== 'undefined') {
		language = localStorage.getItem('language');
	}

	return language;
};
