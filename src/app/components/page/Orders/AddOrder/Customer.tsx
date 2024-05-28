import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import FormField from 'src/app/components/ui/form/field';
import { Button } from 'src/app/components/optimized';
import { AddFillIcon } from 'src/app/utils/icons';
import { Form } from 'src/app/components/ui/form';

interface IAddOrder {
	selectCustomer?: string;
}
export default function Customer() {
	const { t } = useTranslation();
	const [addNewCustomer, setAddNewCustomer] = useState(false);
	const addOrderSchema = {
		selectCustomer: z.optional(z.string().min(1)).or(z.literal('')),
	};
	const handelDefaultValue = {
		selectCustomer: '',
	};

	const handleSubmit: (validatedData: IAddOrder) => void = (values: IAddOrder) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: addOrderSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue,
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<div className='cardDetails-sharedClass p-5 flex-col-top-section-pages'>
					<FormField
						formStore={formStore}
						name='selectCustomer'
						label={t('Customer')}
						render={(field) => (
							<div className='flex-col-top-section-pages gap-[.2rem] w-[50%]'>
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
										<SelectValue placeholder='search customer' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='design'>Design</SelectItem>
										<SelectItem value='theme'>Theme</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
					/>
					<div>
						<Button
							variant='secondary'
							LeftIcon={AddFillIcon}
							onClick={() => {
								setAddNewCustomer(true);
							}}
						>
							{t('add new customer')}
						</Button>
					</div>

					<div className='flex-btn-end'>
						<Button variant='tertiary' className='disabled:text-hint' disabled>
							{t('Back')}
						</Button>
						<Button variant='primary' onClick={onSubmit}>
							{t('Next')}
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}
