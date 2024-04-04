import React, { useState } from 'react';
import { Avatars, CheckBox, ClientBox } from '..';

interface Props {
	id: string;
	title: string;
	subTitle: string;
	img: string;
	fName?: string;
	lName?: string;
	count?: number;
	isChecked: boolean;
	onCheckBoxChange: (isChecked: boolean, itemId: string, title: string) => void; // Update the callback function signature
	variant: string;
}

const SelectItem: React.FC<Props> = ({
	id, // Destructure the id prop
	title,
	subTitle,
	img,
	fName,
	lName,
	count,
	isChecked,
	onCheckBoxChange,
	variant,
}) => {
	// const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxClick = () => {
		const newValue = !isChecked;
		// setIsChecked(newValue);
		onCheckBoxChange(newValue, id, title); // Pass the id to the callback function
	};
	console.log('id', id);
	console.log('title', title);

	switch (variant) {
		case 'customers':
			return (
				<label
					className={`w-full h-[3.5rem] flex items-center justify-between px-[1rem] hover:bg-sec-light ${
						isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<ClientBox
						title={fName + ' ' + lName}
						details={subTitle}
						avatar={<Avatars src={img} fName={fName} lName={lName} />}
					/>
					<CheckBox checked={isChecked} handleOnChange={handleCheckBoxClick} />
				</label>
			);

		case 'groups':
			return (
				<label
					className={`w-full h-[3.5rem] flex items-center justify-between px-[1rem] hover:bg-sec-light ${
						isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<ClientBox title={title} details={subTitle} avatar={<Avatars variant='countAvatar' count={count} />} />
					<CheckBox checked={isChecked} handleOnChange={handleCheckBoxClick} />
				</label>
			);

		default:
			return (
				<label
					className={`w-full h-[56px] flex items-center justify-between px-[1rem] hover:bg-sec-light ${
						isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<div className='flex items-center gap-[1rem]'>
						<div className='w-[46px] h-[46px] rounded overflow-hidden'>
							<img src={img} alt='' className='w-full h-full' />
						</div>

						<div>
							<h4 className='text-sm font-semibold capitalize text-title'>{title}</h4>
							<p className='text-sm text-subtitle'>{subTitle}</p>
						</div>
					</div>
					<CheckBox checked={isChecked} handleOnChange={handleCheckBoxClick} />
				</label>
			);
	}
};

export default SelectItem;

// import React, { useState } from 'react';
// import { Avatars, CheckBox, ClientBox } from '..';

// interface Props {
// 	id: string;
// 	title: string;
// 	subTitle: string;
// 	img: string;
// 	fName?: string;
// 	lName?: string;
// 	count?: number;
// 	onCheckBoxChange: (isChecked: boolean, itemId: string) => void;
// 	variant: string;
// }

// const SelectItem: React.FC<Props> = ({ id, title, subTitle, img, fName, lName, count, onCheckBoxChange, variant }) => {
// 	const [isChecked, setIsChecked] = useState(false);

// 	const handleCheckBoxClick = () => {
// 		const newValue = !isChecked;
// 		setIsChecked(newValue);
// 		onCheckBoxChange(newValue, id, title);
// 	};
// 	console.log('id', id);
// 	console.log('title', title);
// 	// const handleItemClick = () => {
// 	// 	handleCheckBoxClick();
// 	// };

// 	return (
// 		<div
// 			className={`w-full ${
// 				variant === 'customers' ? 'h-[3.5rem]' : 'h-[56px]'
// 			} flex items-center justify-between px-[1rem] cursor-pointer hover:bg-sec-light ${
// 				isChecked ? 'bg-sec-light' : ''
// 			}`}
// 			// onClick={handleItemClick} // Handle click on item
// 		>
// 			<div className='flex items-center gap-[1rem]'>
// 				<div className='w-[46px] h-[46px] rounded overflow-hidden'>
// 					<img src={img} alt='' className='w-full h-full' />
// 				</div>

// 				<div>
// 					<h4 className='text-sm font-semibold capitalize text-title'>{title}</h4>
// 					<p className='text-sm text-subtitle'>{subTitle}</p>
// 				</div>
// 			</div>
// 			<CheckBox initialChecked={isChecked} handleOnChange={handleCheckBoxClick} />
// 		</div>
// 	);
// };

// export default SelectItem;
