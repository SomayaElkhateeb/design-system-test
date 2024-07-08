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

import {
	PostAddCustomerRequest,
	PutUpdateCustomerRequest,
	getCustomerInfo,
} from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import GeneralInfoCustomerForm from './_comp/GeneralInfoCustomerForm';
import PrimaryAddressForm from './_comp/PrimaryAddressForm';
import { UseGetIdParams } from 'src/app/utils/hooks/GetParamsId';
import { getCustomersGroupTable } from 'src/app/store/slices/customersPage/CustomersGroup/customersGroupTableAsyncThunks';

const AddCustomerPage = () => {
	// hooks
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const id = UseGetIdParams();
	//  selectors
	const { CustomerInfo, isLoadingAddOrUpdate } = useAppSelector((state) => state.allCustomer);
	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		id
			? //  case update customer data
			  dispatch(PutUpdateCustomerRequest({ ...values, id })).then((promiseResponse) => {
					if ((promiseResponse.payload.code = 200)) {
						navigate(-1);
					}
			  })
			: //   PostAddCustomerRequest
			  dispatch(PostAddCustomerRequest(values)).then((promiseResponse) => {
					if ((promiseResponse.payload.code = 200)) {
						navigate(-1);
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
			CustomerInfo.customer_group_id &&
				formStore.setValue('customer_group_id', CustomerInfo.customer_group_id.toString());
		}
	}, [id]);
	
	useEffect(() => {
		dispatch(getCustomersGroupTable());
	}, [dispatch]);

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
