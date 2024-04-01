import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import { MdDone } from 'react-icons/md';

const CheckboxWithImage = ({ imageSrc, label, onChange }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className='relative w-16 h-16 justify-center border border-blue-500 rounded cursor-pointer'>
			<img
				className='absolute w-full h-full rounded'
				src={getImageUrl('images/checkIcon.png')}
			/>
			<div
				className='absolute w-full h-full flex items-center justify-center'
				onClick={handleCheckboxChange}
			>
				{isChecked && <ImageOverly />}
			</div>
		</div>
	);
};

const ImageOverly = () => {
	return (
		<>
			<div className='absolute w-full h-full opacity-20 bg-blue-500 rounded'></div>
			<span className='absolute'>
				<MdDone color='#fff' size={24} />
			</span>
		</>
	);
};
export default CheckboxWithImage;
