import { useTranslation } from 'react-i18next';

import { UseFormReturn } from 'react-hook-form';

import FormField from '../../ui/form/field';

import CustomAutoComplete from '../../optimized/InputsFields/AutoCompleteMultiple';
import { addCustomerGroupInterface } from './HookForAddCustomerGroupForm';
import SpecificAutoCompleteInput from '../discount/Selectors/SpecificAutoCompleteInput';
export interface selectItemsInterface {
	id: string;
	name: string;
}
export default function ChooseCustomers({
	formStore,
}: {
	formStore: UseFormReturn<addCustomerGroupInterface>;
}) {
	//  hooks
	const { t } = useTranslation();

	// ///////////////////////////

	return (
		<div className='global-cards gap-[1.2rem]'>
			<h2 className='title'>
				{t('Customers')}({formStore.watch('Customers')?.length})
			</h2>
			<SpecificAutoCompleteInput<addCustomerGroupInterface>
				name='Customers'
				label={t('Customers')}
				formStore={formStore}
			/>
		</div>
	);
}
