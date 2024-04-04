import { useEffect, useState } from 'react';

/**
 * @template Type
 *
 * @param {string} key
 * @param {Type} defaultValue
 * @returns {[Type, (newValue: Type) => void]}
 */
function useLocalStorage(key, defaultValue) {
	const [value, setValue] = useState(() => {
		const storedValue = window.localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : defaultValue;
	});

	useEffect(() => {
		const current = window.localStorage.getItem(key);
		if (current) {
			setValue(JSON.parse(current));
		} else {
			window.localStorage.setItem(key, JSON.stringify(defaultValue));
		}
	}, [key, defaultValue]);

	/** @param {Type} newValue */
	const updateValue = (newValue) => {
		if (Array.isArray(newValue)) {
			setValue(newValue);
			window.localStorage.setItem(key, JSON.stringify(newValue));
		} else {
			setValue(newValue);
			window.localStorage.setItem(key, JSON.stringify(newValue));
		}
	};

	return [value, updateValue];
}

export default useLocalStorage;
