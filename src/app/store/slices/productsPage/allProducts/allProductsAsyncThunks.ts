import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


export const getAllProductsTable = createAsyncThunk('allProductsTable/getAllProductsTable', () =>
	PublicRequest.getData('merchant/catalog/products'),
);


export const PostSimpleQuickProduct = createAsyncThunk('PostSimpleQuickProduct/getAllProductsTable', (payload: FormData) =>
	PublicRequest.postData(payload, 'merchant/catalog/products/store').then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const PostUpdateQuickProduct = createAsyncThunk('PostUpdateQuickProduct/getAllProductsTable', (payload: { data: FormData, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/catalog/products/update/${payload.id}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
