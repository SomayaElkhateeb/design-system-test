import { useTranslation } from 'react-i18next';

import { UseFormReturn } from 'react-hook-form';
import SpecificAutoCompleteInput from '../discount/Selectors/SpecificAutoCompleteInput';
import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { AddCustomerGroupPageSchema } from './AddCustomerGroupSchema';
export interface selectItemsInterface {
	id: string;
	name: string;
}
export default function ChooseCustomers({
	formStore,
}: {
	formStore: UseFormReturn<InferredZodSchema<typeof AddCustomerGroupPageSchema>>;
}) {
	//  hooks
	const { t } = useTranslation();

	// ///////////////////////////

	return (
		<div className='global-cards gap-[1.2rem]'>
			<h2 className='title'>
				{t('Customers')}({formStore.watch('Customers')?.length})
			</h2>
			<SpecificAutoCompleteInput<InferredZodSchema<typeof AddCustomerGroupPageSchema>>
				name='Customers'
				label={t('Customers')}
				formStore={formStore}
			/>
		</div>
	);
}
