import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CheckBox } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { DownIcon } from 'src/app/utils/icons';
import { IAccordion } from './HookAccordionItems';

interface AccordionProps {
	item: {
		title: string;
		subtitle: string;
		countOption: number;
	};
	isOpen: boolean;
	onToggle: () => void;
	children: React.ReactNode;
	isChecked: boolean;
	formStore: UseFormReturn<IAccordion>;
	index: number;
}

export default function AccordionItems({
	item,
	isOpen,
	onToggle,
	children,
	formStore,
	index,
}: AccordionProps) {
	const { title, subtitle, countOption } = item;

	// function handleCheckBoxClick() {
	// 	const newValue = !isChecked;
	// 	handleOnCheckChange(newValue);
	// }

	return (
		<>
			<label>
				{index > 0 && <hr />}
				<div className={`cursor-pointer ${isOpen ? 'bg-sec-light' : 'bg-white'}`}>
					<div className='w-full flex items-start justify-between p-4'>
						<div className='flex items-start gap-4'>
							<CheckBox
								checked={formStore.watch('checked')}
								handleOnChange={(option) => {
									formStore.setValue('checked', option);
								}}
							/>
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
						<div className='flex flex-col items-end gap-2' onClick={onToggle}>
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
