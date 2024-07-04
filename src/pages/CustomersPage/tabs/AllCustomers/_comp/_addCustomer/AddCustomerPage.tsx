import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

import useCustomHookAddCustomerForm, {
	AddCustomerPageSchema,
	AddCustomerPageSchemaValues,
} from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addCustomer/_hook/HookForAddCustomerForm';
import GeneralInfoCustomerForm from '../GeneralInfoCustomerForm';
import PrimaryAddressForm from '../_addAddresse/PrimaryAddressForm';

import { PostAddCustomerRequest } from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';
import { useAppDispatch } from 'src/app/store';
import { useNavigate } from 'react-router-dom';

const AddCustomerPage = () => {
	// hooks
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		dispatch(PostAddCustomerRequest(values)).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				navigate('/customers');
			}
		});
	};

	// custom hook
	const { handelDefaultValue } = useCustomHookAddCustomerForm();

	const { formStore, onSubmit } = useForm({
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
