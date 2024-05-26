import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import useCustomOrderForm, { orderFormInterface } from './HookOrderStatus';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';
import { Button } from 'src/app/components/optimized';
import { Checkbox } from '@mui/material';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';

export default function OrderStatus({
	onClose,
	showOrderStatus,
}: {
	onClose: () => void;
	showOrderStatus: boolean;
}) {
	const { t } = useTranslation();
	const { handelDefaultValue, orderSchema } = useCustomOrderForm();

	const handleSubmit = (values: orderFormInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: orderSchema,
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
											<SelectValue placeholder={t('Processing')} />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='processing'>Processing</SelectItem>
											<SelectItem value='awaitingPayment'>Awaiting Payment</SelectItem>
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
							<Checkbox />
							<span className='text-sm text-title'>{t('Notify customer')}</span>
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
