import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandelingErrors from 'src/app/utils/AxiosUtils/PublicHandelingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddCustomerPageSchemaValues } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addCustomer/_hook/HookForAddCustomerForm';

export const getAllCustomersTable = createAsyncThunk('allCustomersTable/getAllCustomersTable', () =>
	PublicRequest.getData('merchant/customers/list'),
);
export const PostAddCustomerRequest = createAsyncThunk(
	"allCustomersTable/PostAddCustomerRequest",
	(payload: AddCustomerPageSchemaValues) =>
		PublicRequest.postData(payload, `merchant/customers/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandelingErrors.onErrorResponse(err)),
);
