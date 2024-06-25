import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SelectTable from './Comp/SelectTable';
import { useState } from 'react';
// import SelectProductsDialog from './Comp/SelectProductsDialog';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import SelectProductsDialog from './Comp/SelectProductsDialog';

export interface IQuantity {
	quantity: number;
}

const quantitySchema = {
	quantity: z.coerce.number().positive().min(1),
};
const handelDefaultValue: IQuantity = {
	quantity: 0,
};

export default function Products({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const language = UseLanguage();

	const handleSubmit = (values: IQuantity) => {
		console.log(values);
		onNext();
	};

	const { formStore, onSubmit } = useForm({
		schema: quantitySchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue,
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5 flex-col-global'>
				<Button
					variant='secondary'
					text={t('select products')}
					RightIcon={language === 'ar' ? FaChevronLeft : FaChevronRight}
					onClick={() => setIsOpen(true)}
				/>
				<SelectTable formStore={formStore} />
				<div className='flex-btn-end'>
					<Button variant='tertiary' text={t('back')} onClick={onBack} />
					<Button variant='primary' text={t('Next')} onClick={onSubmit} />
				</div>
				<SelectProductsDialog onClose={() => setIsOpen(false)} open={isOpen} />
			</form>
		</Form>
	);
}
