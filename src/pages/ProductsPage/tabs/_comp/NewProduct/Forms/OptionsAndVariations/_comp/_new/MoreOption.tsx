import React, { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { PiHandSwipeRight } from 'react-icons/pi';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { Button } from 'src/app/components/optimized';

interface Option {
	value: string;
	priceDifference: number;
	path?: string;
}

interface MoreOptionProps {
	colorOptions: Option[];
	setColorOptions: React.Dispatch<React.SetStateAction<Option[]>>;
	sizeOptions: Option[];
	setSizeOptions: React.Dispatch<React.SetStateAction<Option[]>>;
	moreOption: boolean;
}

const MoreOption: React.FC<MoreOptionProps> = ({
	colorOptions,
	setColorOptions,
	sizeOptions,
	setSizeOptions,
	moreOption,
}) => {
	const [isCollapseColor, setIsCollapseColor] = useState<boolean>(false);
	const [isCollapseSize, setIsCollapseSize] = useState<boolean>(false);
	const [isSizeOption, setIsSizeOption] = useState<boolean>(false);
	const [isColorOption, setIsColorOption] = useState<boolean>(moreOption);

	const addOption = (type: 'color' | 'size') => {
		if (type === 'color') {
			setColorOptions([...colorOptions, { value: '', priceDifference: 50 }]);
		} else {
			setSizeOptions([...sizeOptions, { value: '', priceDifference: -50 }]);
		}
	};

	const updateOption = (
		type: 'color' | 'size',
		index: number,
		key: keyof Option,
		value: string | number,
	) => {
		if (type === 'color') {
			const newOptions = [...colorOptions];
			newOptions[index][key] = value as never;
			setColorOptions(newOptions);
		} else {
			const newOptions = [...sizeOptions];
			newOptions[index][key] = value as never;
			setSizeOptions(newOptions);
		}
	};

	const deleteOption = (type: 'color' | 'size', index: number) => {
		if (type === 'color') {
			const newOptions = colorOptions.filter((_, i) => i !== index);
			setColorOptions(newOptions);
		} else {
			const newOptions = sizeOptions.filter((_, i) => i !== index);
			setSizeOptions(newOptions);
		}
	};

	const handleColorChange = (index: number, color: string) => {
		// Update the color value at a specific index
		const updatedColorOptions = [...colorOptions];
		updatedColorOptions[index].value = color;
		setColorOptions(updatedColorOptions);
	};

	const renderOptions = (type: 'color' | 'size', options: Option[]) => {
		return (
			<div>
				{options?.map((option, index) => (
					<div key={index} className='flex justify-between items-center mb-2 gap-8'>
						<div className='w-3/6 flex items-center gap-2'>
							{type === 'size' && (
								<img src='/path/to/your/image.png' alt='icon' className='w-6 h-6' />
							)}
							{type === 'color' && (
								<>
									<div key={index} className='flex items-center space-x-2 mb-2'>
										{/* Hidden color input */}
										<input
											type='color'
											value={option.value}
											className='hidden'
											id={`color-input-${index}`}
											onChange={(e) => handleColorChange(index, e.target.value)}
										/>

										{/* Div to control color display */}
										<div
											className='w-6 h-6 rounded-full cursor-pointer'
											style={{ backgroundColor: option.value || 'blue' }}
											onClick={() => {
												const colorInput = document.getElementById(`color-input-${index}`);
												if (colorInput) {
													colorInput.click();
												}
											}}
										></div>
									</div>
								</>
							)}

							<input
								type='text'
								value={option.value}
								onChange={(e) => updateOption(type, index, 'value', e.target.value)}
								className='border p-2 flex-grow w-full'
								placeholder='Option Value'
							/>
						</div>
						<div className='flex items-center w-2/6 relative border bg-white'>
							<label className='ms-2 border-r px-2'>SAR</label>
							<input
								type='number'
								value={option.priceDifference}
								onChange={(e) =>
									updateOption(type, index, 'priceDifference', parseInt(e.target.value, 10))
								}
								className='p-2 w-full border-0 outline-0'
								placeholder='Price'
							/>
						</div>
						<div className='w-1/6 flex justify-center'>
							<button onClick={() => deleteOption(type, index)}>
								<FaRegTrashCan size={20} />
							</button>
						</div>
					</div>
				))}
			</div>
		);
	};

	const renderSection = (
		title: string,
		type: 'color' | 'size',
		isCollapsed: boolean,
		setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
		options: Option[],
	) => (
		<section className='border rounded shadow-sm w-full mb-6'>
			<Header title={title} isCollapse={isCollapsed} setIsCollapse={setIsCollapsed} />
			{!isCollapsed && (
				<section className='p-4'>
					<div className='flex items-center justify-between mb-4'>
						<button
							onClick={() => addOption(type)}
							className='text-primary font-semibold flex items-center gap-1'
						>
							<IoIosAddCircle size={25} />
							<span>Add Another Value</span>
						</button>
						<label className='flex items-center gap-2'>
							<input type='checkbox' checked readOnly className='h-4 w-4' />
							<span>Required</span>
						</label>
					</div>
					<div className='flex items-center py-2 border-b justify-between mb-4 gap-8'>
						<p className='w-3/6'>Option Values</p>
						<p className='w-2/6'>Difference in Price</p>
						<p className='w-1/6 flex justify-center'>Actions</p>
					</div>
					{renderOptions(type, options)}
				</section>
			)}
		</section>
	);

	return (
		<>
			{isColorOption && (
				<section className='border rounded shadow-sm w-full mx-auto'>
					<div className='p-4'>
						{isColorOption &&
							renderSection('Color', 'color', isCollapseColor, setIsCollapseColor, colorOptions)}
						{isSizeOption &&
							renderSection('Size', 'size', isCollapseSize, setIsCollapseSize, sizeOptions)}

						<div className='flex gap-3'>
							<Button
								variant='secondary'
								LeftIcon={<IoIosAddCircle size={25} />}
								onClick={() => setIsSizeOption(true)}
							>
								Add More Option
							</Button>
							<Button variant='primary'>Show Variations</Button>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

interface HeaderProps {
	title: string;
	isCollapse: boolean;
	setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ title, isCollapse, setIsCollapse }) => {
	return (
		<header className='flex-row-global justify-between px-4 py-3 border rounded-sm w-full'>
			<h2 className='text-lg'>{title}</h2>
			<div className='flex gap-5'>
				<button>
					<FaRegTrashCan size={20} />
				</button>
				<button>
					<PiHandSwipeRight size={20} />
				</button>
				<button onClick={() => setIsCollapse((prev) => !prev)}>
					{!isCollapse ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
				</button>
			</div>
		</header>
	);
};

export default MoreOption;
