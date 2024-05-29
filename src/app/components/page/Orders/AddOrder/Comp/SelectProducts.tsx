import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';
import { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import AccordionItems from './AccordionItems';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

const items = [
	{ id: '1', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', countOption: 1 },
	{ id: '2', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', countOption: 2 },
	// { id: '3', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', countOption: 2 },
	// { id: '4', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', countOption: 2 },
	// { id: '5', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', countOption: 2 },
];
export default function SelectProducts({
	onClose,
	addNewCustomer,
}: {
	onClose: () => void;
	addNewCustomer: boolean;
}) {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const { t } = useTranslation();

	const handleCheckBoxChange = (isChecked: boolean) => {
		setIsChecked(isChecked);
	};
	// function handleCheckBoxClick() {
	// const newValue = !props.isChecked;
	// props.handleOnCheckChange(newValue, { id: props.id, title: props.title ?? '' });
	// }
	// ${props.isChecked ? 'bg-sec-light' : ''}

	// handle changes
	const handlePaymentMethodChange = (method: string) => {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
	};

	return (
		// <Form {...formStore}>
		// 	<form onSubmit={onSubmit}>
		<GlobalDialog
			openDialog={addNewCustomer}
			handleClose={onClose}
			style={{ width: { md: '50%', xs: '80%' } }}
		>
			<h2 className='text-title font-semibold'>Select Products</h2>
			{items?.map((item) => (
				<AccordionItems
					key={item.id}
					isOpen={selectedPaymentMethod === item.id}
					item={item}
					onToggle={() => handlePaymentMethodChange(item.id)}
					handleCheckBoxChange={handleCheckBoxChange}
					isChecked={isChecked}
				>
					<ChooseChips />
				</AccordionItems>
			))}

			<div className='flex items-center justify-end gap-4 '>
				<Button variant='tertiary' onClick={() => onClose()} text={t('Cancel')} />
				<Button variant='primary' text={t('Add')} />
			</div>
		</GlobalDialog>
		// 	</form>
		// </Form>
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
