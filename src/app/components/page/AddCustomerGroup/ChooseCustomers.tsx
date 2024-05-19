import { useTranslation } from 'react-i18next';

import { UseFormReturn } from 'react-hook-form';
import { addCustomerGroupInterface } from 'src/pages/AddCustomerGroupPage/AddCustomerGroup';
import FormField from '../../ui/form/field';

import CustomAutoComplete from '../../optimized/InputsFields/AutoCompleteMultiple';
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

	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];

	// ///////////////////////////
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('Customers').length === 0 &&
			formStore.formState.isSubmitted && (
				<p className='global_error'>{'choose  customers required'}</p>
			)
		);
	};
	return (
		<div className='global-cards gap-[1.2rem]'>
			<h2 className='title'>
				{t('Customers')}({formStore.watch('Customers')?.length})
			</h2>
			<div className='flex-col-top-section-pages gap-0'>
				<FormField
					formStore={formStore}
					name='Customers'
					label={t('Choose Customers')}
					render={(field) => (
						<CustomAutoComplete<selectItemsInterface>
							placeholder={'Select'}
							getvalue={(value) => formStore.setValue('Customers', value)}
							name='Customers'
							array={selectItems}
							MainValue={formStore.watch('Customers')}
						/>
					)}
				/>
				{handelAutoCompleteError()}
			</div>
		</div>
	);
}
