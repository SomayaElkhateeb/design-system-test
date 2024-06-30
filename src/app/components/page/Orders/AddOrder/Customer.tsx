import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { AddFillIcon } from 'src/app/utils/icons';
import { Form } from 'src/app/components/ui/form';
import AddCustomerDialog from './Comp/AddCustomerDialog';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';

interface IAddOrder {
	selectCustomer?: string;
}

const addOrderSchema = {
	selectCustomer: z.string().min(1),
};
const handelDefaultValue = {
	selectCustomer: '',
};

export default function Customer({ onNext }: { onNext: () => void }) {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit: (values: IAddOrder) => void = (values: IAddOrder) => {
		console.log(values);
		onNext();
	};

	const { formStore, onSubmit } = useForm({
		schema: addOrderSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue,
	});

	const customerOptions = [
		{ value: 'fashion', label: t('Fashion') },
		{ value: 'electronics', label: t('Electronics') },
		{ value: 'groceries', label: t('Groceries') },
	];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5 grid grid-cols-2 gap-4'>
				<div className='grid gap-4 col-span-2 xl:col-span-1'>
					<SelectFormField
						formStore={formStore}
						name='selectCustomer'
						placeholder={t('search customer')}
						options={customerOptions}
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
