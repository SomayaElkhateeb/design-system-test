import { useEffect, useState } from 'react';

const useSelectBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event) => {
		if (!event.target.closest('.select-box')) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return { isOpen, selectedOption, handleSelect, handleButtonClick };
};

export default useSelectBox;