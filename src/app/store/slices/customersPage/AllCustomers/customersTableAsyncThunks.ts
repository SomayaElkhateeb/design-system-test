import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddCustomerPageSchemaValues } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addCustomer/_hook/HookForAddCustomerForm';

export const getAllCustomersTable = createAsyncThunk('allCustomersTable/getAllCustomersTable', () =>
	PublicRequest.getData('merchant/customers/list'),
);

export const PostAddCustomerRequest = createAsyncThunk(
	'allCustomersTable/PostAddCustomerRequest',
	(payload: AddCustomerPageSchemaValues) =>
		PublicRequest.postData(payload, `merchant/customers/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
export const PutUpdateCustomerRequest = createAsyncThunk(
	'allCustomersTable/PostUpdateCustomerRequest',
	(payload: { data: AddCustomerPageSchemaValues, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/customers/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

export const getCustomerInfo = createAsyncThunk(
	'getCustomerInfo/getAllCustomersTable',
	(payload: string) => PublicRequest.getData(`merchant/customers/show/${payload}`),
);

export const deleteCustomerAction = createAsyncThunk(
	'deleteCustomerAction/getAllCustomersTable',
	(payload: string) => PublicRequest.deleteData(`merchant/customers/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
