import React, { useState } from 'react';
import { Button, Menu } from 'src/app/components/optimized';
import { CalenderIcon, DownIcon } from 'src/app/utils/icons';
const Campaigns = () => {
	return (
		<div>
			<Header />
		</div>
	);
};

export default Campaigns;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};
	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='h-[70px] relative flex items-center px-5'>
			<Button variant='secondaryBtn' LeftIcon={CalenderIcon} RightIcon={DownIcon} onClick={handleButtonClick}>
				{selectedOption ?? 'Select'}
			</Button>
			<div className='flex gap-2 ml-3'>
				<p className='paragraph text-subtitle'>Compared to:</p>
				<p className='paragraph text-title'>Last week</p>
			</div>
			{isOpen && <Menu options={options} selectedOption={selectedOption} onSelect={handleSelect} />}
		</div>
	);
};
