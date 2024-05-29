import React from 'react';
import { CheckBox } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { DownIcon } from 'src/app/utils/icons';

interface AccordionProps {
	item: {
		title: string;
		subtitle: string;
		countOption: number;
	};
	isOpen: boolean;
	onToggle: () => void;
	children: React.ReactNode;
	handleCheckBoxChange: () => void;
	isChecked: boolean;
}

export default function AccordionItems({
	item,
	isOpen,
	onToggle,
	children,
	handleCheckBoxChange,
	isChecked,
}: AccordionProps) {
	const { title, subtitle, countOption } = item;

	function handleCheckBoxClick() {
		// const newValue = !props.isChecked;
		// props.handleOnCheckChange(newValue, { id: props.id, title: props.title ?? '' });
	}
	return (
		<>
			<label
			// 	className={`w-full flex items-start justify-between p-4 hover:bg-sec-light cursor-pointer

			// `}
			// className={`cursor-pointer ${isOpen ? 'bg-sec-light' : 'bg-white'}`}
			>
				<hr />
				<div className={`cursor-pointer ${isOpen ? 'bg-sec-light' : 'bg-white'}`}>
					<div onClick={onToggle} className='w-full flex items-start justify-between p-4'>
						<div className='flex items-start gap-4'>
							<CheckBox checked={isChecked} handleOnChange={handleCheckBoxChange} />
							<div className='flex flex-col gap-4'>
								<div className='flex items-start gap-2'>
									<div className='size-[2.625rem] rounded-md overflow-hidden'>
										<img src={getImageUrl('product/product.png')} />
									</div>
									<div>
										<h3 className='title text-sm'>{title}</h3>
										<p className='text-subtitle text-sm'>{subtitle}</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-end gap-2 '>
							<p className='text-sm text-subtitle'>
								{countOption} {countOption > 1 ? 'options' : 'option'}
							</p>
							<DownIcon className={`transition-all fill-hint ${isOpen ? 'rotate-180' : ''}`} />
						</div>
					</div>

					<div className={`px-12 ${!isOpen && 'hidden'}`}>{children}</div>
				</div>
			</label>
		</>
	);
}

// <div className={`cardDetails-sharedClass  ${isOpen ? 'bg-light-1' : 'bg-white'}`}>
// 	<button
// 		type='button'
// 		className='flex items-center justify-between w-full p-4 text-left focus:outline-none'
// 		onClick={onToggle}
// 	>
// 		<div className='flex items-center gap-2'>
// 			{icon}
// 			<h2 className='title'>{title}</h2>
// 		</div>
// 		<DownIcon className={`transition-all fill-hint ${isOpen ? 'rotate-180' : 'bg-white'}`} />
// 	</button>
// 	<div className={`p-4 ${!isOpen && 'hidden'}`}>{children}</div>
// </div>
