import { createAsyncThunk, GetThunkAPI } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'node_modules/@reduxjs/toolkit/dist/createAsyncThunk';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


export const getBrandsTable = createAsyncThunk('brandsTable/getBrandsTable', () =>
	PublicRequest.getData('merchant/catalog/brands/list'),
);


export const PostAddBrandRequest = createAsyncThunk(
	"brandsTable/PostAddBrandRequest",
	(payload: FormData) =>
		PublicRequest.postData(payload, `merchant/catalog/brands/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// PutUpdateCustomerGroupRequest
export const PutUpdateBrandRequest = createAsyncThunk(
	"brandsTable/PutUpdateBrandRequest",
	(payload: { data: FormData, path: string }) =>
		PublicRequest.postData(payload?.data, payload?.path)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// deleteCustomerGroupAction
export const deleteBrandAction = createAsyncThunk(
	'brandsTable/deleteBrandAction',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/brands/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// getCustomerGroupInfo
export const getBrandInfo = createAsyncThunk('brandsTable/getBrandInfo', (payload: string) =>
	PublicRequest.getData(`merchant/catalog/brands/show/${payload}`),
);
