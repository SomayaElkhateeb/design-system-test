import FormField from 'src/app/components/ui/form/field';

import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';

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
	add_button?: boolean;
	setOpenDialog?: (e: boolean) => void;
}

export default function SelectFormField({
	formStore,
	name,
	options,
	placeholder,
	className,
	label,
	add_button,
	setOpenDialog,
}: SelectFormFieldProps) {
	//  hook
	const { t } = useTranslation();
	return (
		<FormField
			container={{ className: className }}
			formStore={formStore}
			name={name}
			label={label}
			render={(field) => (
				<div className='relative flex items-center border border-gray-300 rounded-md'>
					<select
						{...field}
						name='field.name'
						className='block w-full px-3 py-2 bg-white rounded-l-md shadow-sm focus:border-none focus:outline-none '
						onChange={field.onChange}
					>
						<option value='' disabled>
							{placeholder}
						</option>
						{options?.length > 0 &&
							options?.map((e, i) => (
								<option key={e.value} value={e.value}>
									{e.label}
								</option>
							))}
					</select>
					{add_button && (
						<button
							type='button'
							className='md:flex-row-global flex-col-global items-center px-2 py-2 border-l w-2/5'
							onClick={() => setOpenDialog(true)}
						>
							<FaCirclePlus size={24} />
							<span className='ms-1'>{t('Add One')}</span>
						</button>
					)}
				</div>
			)}
		/>
	);
}
