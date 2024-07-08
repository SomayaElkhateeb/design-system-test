import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AddAddressInterface } from 'src/app/components/page/Orders/AddOrder/Comp/useOrderAddress';
import PublicHandelingErrors from 'src/app/utils/AxiosUtils/PublicHandelingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


export const getAllAddressesCustomer = createAsyncThunk('AddressesCustomer/getAllAddressesCustomer', (payload: string) =>
	PublicRequest.getData(`merchant/customers/${payload}/addresses`),
);
export const PostAddCustomerAddressRequest = createAsyncThunk(
	"AddressesCustomer/PostAddCustomerAddressRequest",
	(payload: AddAddressInterface) =>
		PublicRequest.postData(payload, `merchant/customers/${payload?.customer_id}/addresses`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandelingErrors.onErrorResponse(err)),
);
