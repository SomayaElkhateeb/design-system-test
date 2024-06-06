import React from 'react';

interface FontSizeProgressProps {
	value: number;
	onChange: (value: number) => void;
	min: number;
	max: number;
}

const FontSizeProgress: React.FC<FontSizeProgressProps> = ({ value, onChange, min, max }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(Number(e.target.value));
	};

	return (
		<label className='block mb-4'>
			<span className='block text-sm font-medium text-gray-700'>Font Size: {value}</span>
			<input
				type='range'
				name='fontSize'
				value={value}
				onChange={handleChange}
				min={min}
				max={max}
				className='mt-1 block w-full'
			/>
		</label>
	);
};

export default FontSizeProgress;
