import { FieldValues, UseFormReturn, Path } from 'react-hook-form';

import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';
interface selectItemsInterface {
	id: string;
	name: string;
}

interface FormAutoCompleteFieldProps<T extends FieldValues> {
	formStore: UseFormReturn<T>;
	label?: string;
	name: Path<T>;
}
export default function SpecificAutoCompleteInput<T extends FieldValues>({
	formStore,
	name,
	label,
}: FormAutoCompleteFieldProps<T>) {
	//  hooks
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name={name}
				label={label}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={label}
						getvalue={(value: any) => formStore.setValue(name, value)}
						name={name}
						array={selectItems}
						MainValue={field.value}
					/>
				)}
			/>
		</div>
	);
}
