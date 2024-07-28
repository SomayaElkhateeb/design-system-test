import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

// get config list
// post store custom
export const postStoreCustom = createAsyncThunk(
	"postStoreCustom/postStoreCustom",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store-custom`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

////////////////////////////////////////////////////////////////////////
// post general settings store
export const postGeneralSettingsStore = createAsyncThunk(
	"postGeneralSettingsStore/postGeneralSettingsStore",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post front defaults
export const postFrontDefaults = createAsyncThunk(
	"postFrontDefaults/postFrontDefaults",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post review
export const postReview = createAsyncThunk(
	"postReview/postReview",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post queries
export const postQueries = createAsyncThunk(
	"postQueries/postQueries",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customizations-checkout
export const postCustomizationsCheckout = createAsyncThunk(
	"postCustomizationsCheckout/postCustomizationsCheckout",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customization-product
export const postCustomizationProduct = createAsyncThunk(
	"postCustomizationProduct/postCustomizationProduct",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customization-double-opt
export const postCustomizationDoubleOpt = createAsyncThunk(
	"postCustomizationDoubleOpt/postCustomizationDoubleOpt",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post customization-order-invoice
export const postCustomizationOrderInvoice = createAsyncThunk(
	"postCustomizationOrderInvoice/postCustomizationOrderInvoice",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
////////////////////////////////////////////////////////////////////////
// post taxes
export const postTaxesConfiguration = createAsyncThunk(
	"postTaxesConfiguration/postTaxesConfiguration",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/settings/config/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);









