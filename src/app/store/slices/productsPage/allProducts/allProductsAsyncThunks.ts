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

export const deleteProductAction = createAsyncThunk(
	'deleteProductAction/getAllCustomersTable',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/products/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
// deleteAllProductsAction
export const deleteAllProductsAction = createAsyncThunk(
	'brandsTable/deleteAllProductsAction',
	(payload: { indexes: string }) => PublicRequest.postData(payload, `merchant/catalog/products/mass-destroy`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const getExportAllProducts = createAsyncThunk('brandsTable/getExportAllProducts', () =>
	PublicRequest.getData('merchant/catalog/products/export'),
);


export const PostImportProducts = createAsyncThunk('PostImportProducts/getAllProductsTable', (payload:any) =>
	PublicRequest.postFormData(payload, `merchant/catalog/products/import`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

