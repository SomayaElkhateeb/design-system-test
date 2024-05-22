import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormField from 'src/app/components/ui/form/field';
import { Switch } from 'src/app/components/ui/switch';

interface FormSwitchFieldProps<T> {
  formStore: UseFormReturn<T>;
  description?: string;
  label: string;
  name: keyof T;
}

export default function FormSwitchField<T>({
	formStore,
	name,
	label,
	description,
}: FormSwitchFieldProps<T>) {
	const { t } = useTranslation();
	return (
		<div className='flex justify-between items-center col-span-2'>
			<div className='grid gap-1'>
				<h3 className='title text-base'>{t(label)}</h3>
				{description && <p className='paragraph text-subtitle'>{t(description)}</p>}
			</div>
			<FormField
				formStore={formStore}
				name={name}
				render={(field) => (
					<div className='flex gap-2 items-center'>
						<Switch checked={field.value} onCheckedChange={field.onChange} />
						<p className='paragraph mt-[.1rem]'>{t('Enabled')}</p>
					</div>
				)}
			/>
		</div>
	);
}
