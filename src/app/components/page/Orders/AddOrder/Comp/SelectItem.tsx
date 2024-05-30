import { CheckBox } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import PaymentAccordion from 'src/app/components/optimized/Payment/PaymentAccordion';

interface Item {
	id: string;
	title: string;
	subtitle: string;
	countOption: number;
}

export default function SelectItem({ items }: { items: Item[] }) {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
	function handleCheckBoxClick() {
		// const newValue = !props.isChecked;
		// props.handleOnCheckChange(newValue, { id: props.id, title: props.title ?? '' });
	}
	// ${props.isChecked ? 'bg-sec-light' : ''}

	// handle changes
	const handlePaymentMethodChange = (method: string) => {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
	};

	return (
		<>
			{items?.map((item: Item) => {
				const { id, title, subtitle, countOption } = item;
				<label
					key={id}
					className={`w-full flex items-start justify-between p-4 hover:bg-sec-light cursor-pointer

			`}
				>
					<div className='flex items-start gap-4'>
						{/* <CheckBox
							// checked={props.isChecked}
							handleOnChange={handleCheckBoxClick}
						/> */}
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
					<div className='flex flex-col justify-end gap-2'>
						<p className='text-sm text-subtitle'>{countOption > 1 ? 'option' : 'options'}</p>

						<PaymentAccordion
							isOpen={selectedPaymentMethod === id}
							onToggle={() => handlePaymentMethodChange(id)}
						>
							<ChooseChips />
						</PaymentAccordion>
					</div>
				</label>;
			})}
		</>
	);
}

function ChooseChips() {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const colorOptions = ['Red', 'Blue', 'Yellow'];
	const sizeOptions = ['XL', 'L', 'M'];
	return (
		<div className='flex flex-col gap-1.5'>
			<h4 className='title text-sm'>Color</h4>

			<SingleChoiceChips
				options={colorOptions}
				setSelected={handleOptionSelect}
				selected={selectedOption}
			/>

			<h4 className='title text-sm'>Size</h4>

			<SingleChoiceChips
				options={sizeOptions}
				setSelected={handleOptionSelect}
				selected={selectedOption}
			/>
		</div>
	);
}
