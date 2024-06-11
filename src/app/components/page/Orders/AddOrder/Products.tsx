import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SelectTable from './Comp/SelectTable';
import { useState } from 'react';
import SelectProducts from './Comp/SelectProducts';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
export interface IQuantity {
	quantity: number;
}

const quantitySchema = {
	quantity: z.coerce.number().positive().min(1),
};

const handelDefaultValue = {
	quantity: 0,
};
export default function Products() {
	const [selectProducts, setSelectProducts] = useState(false);
	const { t } = useTranslation();
	const language = UseLanguage();

	const handleSubmit: (validatedData: IQuantity) => void = (values: IQuantity) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: quantitySchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue,
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5 flex-col-global'>
				<div>
					<Button
						variant='secondary'
						RightIcon={language === 'ar' ? FaChevronLeft : FaChevronRight}
						onClick={() => setSelectProducts(true)}
					>
						{t('select products')}
					</Button>
				</div>
				<SelectTable formStore={formStore} />
				<div className='flex-btn-end'>
					<Button variant='tertiary'>{t('back')}</Button>
					<Button variant='primary' onClick={onSubmit}>
						{t('Next')}
					</Button>
				</div>
				{selectProducts && (
					<SelectProducts
						onClose={() => setSelectProducts(false)}
						addNewCustomer={selectProducts}
					/>
				)}
			</form>
		</Form>
	);
}
