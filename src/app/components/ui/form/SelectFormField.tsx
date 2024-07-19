import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import FormField from 'src/app/components/ui/form/field';

import { UseFormReturn } from 'react-hook-form';

interface Option {
	value: string;
	label: string;
}

interface SelectFormFieldProps {
	formStore: UseFormReturn<any>;
	name: string;
	options: Option[];
	placeholder?: string;
	className?: string;
	label?: string;
}

export default function SelectFormField({
	formStore,
	name,
	options,
	placeholder,
	className,
	label,
}: SelectFormFieldProps) {
	return (
		<FormField
			container={{ className: className }}
			formStore={formStore}
			name={name}
			label={label}
			render={(field) => (
				<Select
					onValueChange={field.onChange}
					value={field.value}
					required={field.required}
					name={field.name}
				>
					<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
					<SelectContent>
						{options.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			)}
		/>
	);
}
