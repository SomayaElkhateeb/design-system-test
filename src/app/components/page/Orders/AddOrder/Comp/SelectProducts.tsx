import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';
import { useEffect, useState } from 'react';
import AccordionItems from './AccordionItems';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import useCustomHookAccordion, { IAccordion } from './HookAccordionItems';
import { useForm } from 'src/app/utils/hooks/form';
import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

const items = [
	{ id: '1', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', countOption: 1 },
	{ id: '2', title: 'product', subtitle: 'Blankets', countOption: 2 },
	{ id: '3', title: 'Blankets', subtitle: 'Blankets', countOption: 2 },
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
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredItems, setFilteredItems] = useState(items);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const { t } = useTranslation();

	// custom hook
	const { handelDefaultValue, accordionSchema } = useCustomHookAccordion();

	const handleSubmit = (values: IAccordion) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: accordionSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	// checkbox
	// const handleCheckBoxChange = (isChecked: boolean) => {
	// 	setIsChecked(isChecked);
	// };

	// handle changes
	const handlePaymentMethodChange = (method: string) => {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
	};

	// search
	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
	};

	useEffect(() => {
		if (searchQuery) {
			setFilteredItems(
				items.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())),
			);
		} else {
			setFilteredItems(items);
		}
	}, [searchQuery]);

	return (
		<GlobalDialog
			openDialog={addNewCustomer}
			handleClose={onClose}
			style={{ width: { md: '50%', xs: '80%' } }}
		>
			<Form {...formStore}>
				<form onSubmit={onSubmit} className='flex flex-col gap-4'>
					<h2 className='text-title font-semibold'>Select Products</h2>

					<FormField
						// handleOnChange={(e) => handleSearchChange(e.target.value)}
						formStore={formStore}
						name='search'
						render={(field) => <Input {...field} placeholder='Search' />}
					/>

					<div>
						{items?.map((item, index) => (
							<AccordionItems
								key={item.id}
								isOpen={selectedPaymentMethod === item.id}
								item={item}
								onToggle={() => handlePaymentMethodChange(item.id)}
								isChecked={isChecked}
								formStore={formStore}
								index={index}
							>
								<div className='pb-4'>
									<FormChoiceChips<IAccordion>
										checkoutForm
										formStore={formStore}
										name='color'
										label={t('Color')}
										options={['Red', 'Blue', 'Yellow']}
									/>

									<FormChoiceChips<IAccordion>
										checkoutForm
										formStore={formStore}
										name='size'
										label={t('Size')}
										options={['XL', 'L', 'M']}
									/>
								</div>
							</AccordionItems>
						))}
					</div>

					<div className='flex items-center justify-end gap-4 '>
						<Button variant='tertiary' onClick={() => onClose()}>
							{t('Cancel')}
						</Button>
						<Button variant='primary' onClick={onSubmit}>
							{t('Add' + ' ')} ({items.length})
						</Button>
					</div>
				</form>
			</Form>
		</GlobalDialog>
	);
}
