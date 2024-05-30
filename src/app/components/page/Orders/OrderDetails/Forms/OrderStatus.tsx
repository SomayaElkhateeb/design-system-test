import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';

import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';
import { Button, CheckBox } from 'src/app/components/optimized';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import useOrderStatusForm, { orderStatusFormInterface } from './HookOrderStatus';

export default function OrderStatus({
	onClose,
	showOrderStatus,
}: {
	onClose: () => void;
	showOrderStatus: boolean;
}) {
	const { t } = useTranslation();

	const { handelDefaultValue, orderStatusSchema } = useOrderStatusForm();

	const handleSubmit = (values: orderStatusFormInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: orderStatusSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<GlobalDialog
					openDialog={showOrderStatus}
					handleClose={onClose}
					style={{ width: { md: '50%', xs: '70%' } }}
				>
					<div className='flex-col-top-section-pages  gap-3'>
						<h3 className='title'>{t('Update order status')}</h3>

						<div className='flex-col-top-section-pages  md:w-[70%]'>
							<FormField
								formStore={formStore}
								name='status'
								label={t('Order status')}
								render={(field) => (
									<Select
										onValueChange={field.onChange}
										value={field.value}
										required={field.required}
										name={field.name}
									>
										<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
											<SelectValue placeholder='Egypt' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='egypt'>Egypt</SelectItem>
											<SelectItem value='saudiArabia'>Saudi Arabia</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>

							<FormField
								formStore={formStore}
								name='comment'
								label={t('Comment (optional)')}
								render={(field) => <Textarea {...field} placeholder={''} />}
							/>
						</div>

						<div>
							<CheckBox
								label={t('Notify customer')}
								checked={formStore.watch('notifyCustomer')}
								handleOnChange={(option) => {
									formStore.setValue('notifyCustomer', option);
								}}
							/>
						</div>

						<div className='flex justify-end items-center gap-4'>
							<Button variant='tertiary' onClick={onClose}>
								{t('cancel')}
							</Button>
							<Button variant='primary' onClick={onSubmit}>
								{t('update')}
							</Button>
						</div>
					</div>
				</GlobalDialog>
			</form>
		</Form>
	);
}
