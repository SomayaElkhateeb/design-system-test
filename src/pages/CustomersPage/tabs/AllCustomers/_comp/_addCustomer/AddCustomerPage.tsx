import React, { useEffect, useState } from 'react';
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

import {
	PostAddCustomerRequest,
	PutUpdateCustomerRequest,
	getCustomerInfo,
} from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AddCustomerPage = () => {
	// hooks
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const id = searchParams.get('id');
	//  selectors
	const { CustomerInfo, isLoadingAddOrUpdate } = useAppSelector((state) => state.allCustomer);
	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		id
			? //  case update customer data
			  dispatch(PutUpdateCustomerRequest({ ...values, id })).then((promiseResponse) => {
					if ((promiseResponse.payload.code = 200)) {
						navigate('/customers');
					}
			  })
			: //   PostAddCustomerRequest
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

	//  get customer info with id params to fill inputs with it
	useEffect(() => {
		if (id) {
			dispatch(getCustomerInfo(id));
			CustomerInfo.gender && formStore.setValue('gender', CustomerInfo.gender);
			CustomerInfo.first_name && formStore.setValue('first_name', CustomerInfo.first_name);
			CustomerInfo.last_name && formStore.setValue('last_name', CustomerInfo.last_name);
			CustomerInfo.email && formStore.setValue('email', CustomerInfo.email);
			CustomerInfo.phone && formStore.setValue('phone', CustomerInfo.phone);
		}
	}, [id]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global relative'>
				<SubHeader title={t('Add New Customer')}>
					<SubHeaderDefaultBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom-grid-parent gap-5  custom_container'>
					<div className='flex-col-global grid-left'>
						{/* general info section */}
						<GeneralInfoCustomerForm formStore={formStore} />
						{/* primary Address section */}
						<PrimaryAddressForm formStore={formStore} />
					</div>
				</div>
				<SubHeaderMobileBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
			</form>
		</Form>
	);
};

export default AddCustomerPage;
