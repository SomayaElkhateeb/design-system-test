import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

import GeneralInfoCustomerForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/GeneralInfoCustomerForm';
import useCustomHookAddCustomerForm, { AddCustomerPageSchema, AddCustomerPageSchemaValues } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addCustomer/_hook/HookForAddCustomerForm';
import PrimaryAddressForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addAddresse/PrimaryAddressForm';

const AddCustomerPage: React.FC = () => {
	// hooks
	const { t } = useTranslation();

	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		console.log(values);
		// handleClose();
	};

	// custom hook
	const { handelDefaultValue } = useCustomHookAddCustomerForm();

	const { formStore, onSubmit } = useForm<AddCustomerPageSchemaValues>({
		schema: AddCustomerPageSchema,
		handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global relative'>
				<SubHeader title={t('Add New Customer')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom-grid-parent gap-5  custom_container'>
					<div className='flex-col-global grid-left'>
						{/* general info section */}
						<GeneralInfoCustomerForm formStore={formStore} />
						{/* primary Address section */}
						<PrimaryAddressForm formStore={formStore} />
						
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
};

export default AddCustomerPage;
