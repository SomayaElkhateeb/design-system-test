import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandelingErrors from 'src/app/utils/AxiosUtils/PublicHandelingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddCustomerGroupPageSchemaValues } from 'src/pages/CustomersPage/tabs/CustomersGroups/_comp/_AddCustomerGroup/_schema/AddCustomerGroupSchema';

export const getCustomersGroupTable = createAsyncThunk(
	'customersGroupTable/getCustomersGroupTable',
	() => PublicRequest.getData('merchant/customers/groups/list'),
);
export const PostAddCustomerGroupRequest = createAsyncThunk(
	"AddressesCustomer/PostAddCustomerAddressRequest",
	(payload: AddCustomerGroupPageSchemaValues) =>
		PublicRequest.postData(payload, `merchant/customers/groups/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandelingErrors.onErrorResponse(err)),
);
// PutUpdateCustomerGroupRequest
export const PutUpdateCustomerGroupRequest = createAsyncThunk(
	"AddressesCustomer/PutUpdateCustomerGroupRequest",
	(payload: AddCustomerGroupPageSchemaValues) =>
		PublicRequest.putData(payload, `merchant/customers/groups/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandelingErrors.onErrorResponse(err)),
);

// getCustomerGroupInfo
export const getCustomerGroupInfo = createAsyncThunk('AddressesCustomer/getCustomerGroupInfo', (payload: string) =>
	PublicRequest.getData(`merchant/customers/groups/show/${payload}`),
);
