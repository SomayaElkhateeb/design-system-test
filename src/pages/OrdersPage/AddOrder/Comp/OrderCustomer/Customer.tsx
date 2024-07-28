import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { AddFillIcon } from 'src/app/utils/icons';
import { Form } from 'src/app/components/ui/form';
import AddCustomerDialog from './_comp/AddCustomerDialog';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { useAppSelector } from 'src/app/store';

interface IAddOrder {
	customer_id?: string;
}

const addOrderSchema = {
	customer_id: z.string().min(1),
};
const handelDefaultValue = {
	customer_id: '',
};

export default function Customer({ onNext }: { onNext: () => void }) {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const { allCustomers } = useAppSelector((state) => state.allCustomer);
	const handleSubmit: (values: IAddOrder) => void = (values: IAddOrder) => {
		onNext();
	};

	const { formStore, onSubmit } = useForm({
		schema: addOrderSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue,
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5 grid grid-cols-2 gap-4'>
				<div className='grid gap-4 col-span-2 xl:col-span-1'>
					<SelectFormField
						formStore={formStore}
						name='customer_id'
						placeholder={t('search customer')}
						options={allCustomers?.map((e) => {
							return {
								value: e?.id,
								label: e?.name,
							};
						})}
					/>
					<Button
						variant='secondary'
						text={t('add new customer')}
						LeftIcon={AddFillIcon}
						className='w-fit'
						onClick={() => setIsOpen(true)}
					/>
				</div>
				<div className='flex-btn-end col-span-2'>
					<Button variant='tertiary' text={t('back')} disabled />
					<Button variant='primary' text={t('Next')} onClick={onSubmit} />
				</div>
				<AddCustomerDialog onClose={() => setIsOpen(false)} open={isOpen} />
			</form>
		</Form>
	);
}