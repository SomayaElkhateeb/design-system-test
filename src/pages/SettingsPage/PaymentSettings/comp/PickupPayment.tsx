import { z } from 'zod';
import { useTranslation } from 'react-i18next';

import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { Textarea } from 'src/app/components/ui/textarea';
import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';
import { Form } from 'src/app/components/ui/form';

interface PickupPaymentProps {
	handleClose: () => void;
	showPayment: boolean;
}
const style = {
	width: { md: '40rem', xs: '22rem' },
};
const pickupPaymentSchema = {
	instructions: z.string(),
};
const handleSubmit = (values: { instructions: string }) => {
	console.log(values);
};
const handelDefaultValue = () => {
	return {
		instructions: '',
	};
};

export default function PickupPayment({ handleClose, showPayment }: PickupPaymentProps) {
	const { t } = useTranslation();
	const handleSubmit = (values: { instructions: string }) => {
		console.log(values);
		handleClose();
	};
	const { formStore, onSubmit } = useForm({
		schema: pickupPaymentSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<GlobalDialog openDialog={showPayment} handleClose={handleClose} style={style}>
			<Form {...formStore}>
				<form onSubmit={onSubmit} className='flex-col-top-section-pages grid grid-cols-3'>
					<h2 className='title capitalize col-span-3'>{t('Cash on pickup')}</h2>
					<div className='col-span-2'>
						<FormField
							formStore={formStore}
							name='instructions'
							label={t('Details & instructions (optional)')}
							render={(field) => <Textarea {...field} placeholder={'e.g., Free shipping'} />}
						/>
					</div>
					<div className='flex items-center justify-end gap-4 col-span-3'>
						<Button variant='tertiary' onClick={() => handleClose()} text={t('Cancel')} />
						<Button variant='primary' onClick={onSubmit} text={t('Save changes')} />
					</div>
				</form>
			</Form>
		</GlobalDialog>
	);
}
