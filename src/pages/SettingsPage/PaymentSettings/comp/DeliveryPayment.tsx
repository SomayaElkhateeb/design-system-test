import { useState } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { Textarea } from 'src/app/components/ui/textarea';
import { Button, CheckBox } from 'src/app/components/optimized';
import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';

interface DeliveryPaymentProps {
	handleClose: () => void;
	showPayment: boolean;
}
interface DeliveryPaymentTypes {
	instructions: string;
	minimumPrice: number;
	maximumPrice: number;
}
const style = {
	width: { md: '40rem', xs: '22rem' },
};
const addPaymentSchema = {
	instructions: z.string(),
	minimumPrice: z.coerce.number().min(0),
	maximumPrice: z.coerce.number().min(0),
};

const handelDefaultValue = () => {
	return {
		instructions: '',
		minimumPrice: 0,
		maximumPrice: 0,
	};
};

export default function DeliveryPayment({ handleClose, showPayment }: DeliveryPaymentProps) {
	const { t } = useTranslation();
	const [addCondition, setAddCondition] = useState<boolean>();

	const handleSubmit = (values: DeliveryPaymentTypes) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: addPaymentSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<GlobalDialog openDialog={showPayment} handleClose={handleClose} style={style}>
			<Form {...formStore}>
				<form onSubmit={onSubmit} className='flex-col-top-section-pages grid grid-cols-3'>
					<h3 className='title capitalize  col-span-3'>{t('Add payment method')}</h3>
					<div className='grid gap-4 col-span-2'>
						<FormField
							formStore={formStore}
							name='instructions'
							label={t('Details & instructions (optional)')}
							render={(field) => <Textarea {...field} />}
						/>
						<CheckBox
							label={t('Add conditions')}
							checked={addCondition}
							handleOnChange={() => setAddCondition(!addCondition)}
						/>
						{addCondition && (
							<div className='grid grid-cols-2 gap-4'>
								<h3 className='title capitalize col-span-2'>{t('Applies when')}</h3>
								<div className='col-span-1'>
									<FormField
										formStore={formStore}
										name='minimumPrice'
										label={t('Minimum Price')}
										render={(field) => <Input {...field} />}
									/>
								</div>
								<div className='col-span-1'>
									<FormField
										formStore={formStore}
										name='maximumPrice'
										label={t('Maximum Price')}
										render={(field) => <Input {...field} />}
									/>
								</div>
							</div>
						)}
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
