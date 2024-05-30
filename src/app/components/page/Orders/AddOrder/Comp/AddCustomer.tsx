import { useTranslation } from 'react-i18next';
import useCustomHookAddCustomer, { IAddCustomer } from './HookForAddCustomer';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { useForm } from 'src/app/utils/hooks/form';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { Button } from 'src/app/components/optimized';
import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';

export default function AddCustomer({
	onClose,
	addNewCustomer,
}: {
	onClose: () => void;
	addNewCustomer: boolean;
}) {
	const { t } = useTranslation();
	const { handelDefaultValue, addCustomerSchema } = useCustomHookAddCustomer();

	const handleSubmit = (values: IAddCustomer) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: addCustomerSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<GlobalDialog
			openDialog={addNewCustomer}
			handleClose={onClose}
			style={{ width: { md: '50%', xs: '80%' } }}
		>
			<Form {...formStore}>
				<form onSubmit={onSubmit}>
					<div className='flex-col-top-section-pages gap-3'>
						<h3 className='title'>{t('Update order status')}</h3>
						<FormField
							formStore={formStore}
							label={t('Full Name')}
							name='fullName'
							render={(field) => <Input {...field} placeholder='' />}
						/>
						<FormField
							formStore={formStore}
							label={t('Phone number')}
							name='phone'
							render={(field) => (
								<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
							)}
						/>
						<FormField
							formStore={formStore}
							label={t('Email')}
							name='email'
							render={(field) => <Input {...field} placeholder='' />}
						/>
						<div className='flex justify-end items-center gap-4'>
							<Button variant='tertiary' onClick={onClose}>
								{t('cancel')}
							</Button>
							<Button variant='primary' onClick={onSubmit}>
								{t('add')}
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</GlobalDialog>
	);
}
