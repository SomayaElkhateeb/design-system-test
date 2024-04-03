import { useState } from 'react';
import { Avatars, CheckBox, ClientBox } from '..';

const SelectItem = ({ title, subTitle, img, fName, lName, count, onCheckBoxChange, varient }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckBoxClick = () => {
		const newValue = !isChecked;
		setIsChecked(newValue);
		onCheckBoxChange(newValue);
	};
	switch (varient) {
		case 'customers':
			return (
				<div
					className={`w-full h-[56px] flex items-center justify-between px-[18px] hover:bg-sec-light ${
						isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<ClientBox
						title={fName + ' ' + lName}
						details={subTitle}
						avatar={<Avatars img={img} fName={fName} lName={lName} />}
					/>
					<button onClick={handleCheckBoxClick}>
						<CheckBox checked={isChecked} />
					</button>
				</div>
			);

		case 'groups':
			return (
				<div
					className={`w-full h-[56px] flex items-center justify-between px-[18px] hover:bg-sec-light ${
						isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<ClientBox title={title} details={subTitle} avatar={<Avatars variant='countAvatar' count={count} />} />
					<button onClick={handleCheckBoxClick}>
						<CheckBox checked={isChecked} />
					</button>
				</div>
			);

		default:
			return (
				<div
					className={`w-full h-[56px] flex items-center justify-between px-[18px] hover:bg-sec-light ${
						isChecked ? 'bg-sec-light' : ''
					}`}
				>
					<div className='flex items-center gap-[18px]'>
						<div className='w-[46px] h-[46px] rounded overflow-hidden'>
							<img src={img} alt='' className='w-full h-full' />
						</div>

						<div>
							<h4 className='text-sm font-semibold capitalize text-title'>{title}</h4>
							<p className='text-sm text-subtitle'>{subTitle}</p>
						</div>
					</div>
					<button onClick={handleCheckBoxClick}>
						<CheckBox checked={isChecked} />
					</button>
				</div>
			);
	}
};

export default SelectItem;
