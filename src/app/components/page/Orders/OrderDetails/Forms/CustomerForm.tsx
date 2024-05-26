import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomCustomerForm, { customerFormInterface } from './HookCustomerForm';

export default function CustomerForm({ handleCustomerForm }: { handleCustomerForm: () => void }) {
	const { t } = useTranslation();

	// custom hook
	const { handelDefaultValue, customerSchema } = useCustomCustomerForm();

	const handleSubmit = (values: customerFormInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: customerSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const handleSubmitBtn = () => {
		onSubmit();
		// handleCustomerForm();
	};

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex flex-col gap-4 pt-3'>
				<div className='flex flex-col gap-4'>
					<FormField
						formStore={formStore}
						label={t('Name')}
						name='name'
						render={(field) => <Input {...field} placeholder={''} />}
					/>

					<FormField
						formStore={formStore}
						label={t('Email')}
						name='email'
						render={(field) => <Input {...field} placeholder={''} />}
					/>

					<FormField
						formStore={formStore}
						label={t('Phone')}
						name='phone'
						render={(field) => (
							<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
						)}
					/>
				</div>
				{/* btns */}
				<div className='flex justify-end items-center gap-4'>
					<Button onClick={handleCustomerForm} variant='secondary'>
						{t('Discard')}
					</Button>
					<Button onClick={handleSubmitBtn} variant='primary'>
						{t('Save')}
					</Button>
				</div>
			</form>
		</Form>
	);
}
