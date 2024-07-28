import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AddMerchantPaymentMethodSchemaValues } from 'src/app/schema/settings/AddMerchantPaymentMethodSchema';

// get merchant payment methods list
export const getMerchantPaymentList = createAsyncThunk('merchantPaymentMethods/getMerchantPaymentList', () =>
	PublicRequest.getData('merchant/payment-methods'),
);

// get merchant payment methods Show
export const getMerchantPaymentShow = createAsyncThunk(
	'merchantPaymentMethodsShow/getMerchantPaymentShow',
	(payload: number) => PublicRequest.getData(`merchant/payment-methods/${payload}`), 
);


// create merchant payment methods
export const postMerchantPayment = createAsyncThunk(
	"merchantPaymentMethods/postMerchantPayment",
	(payload: AddMerchantPaymentMethodSchemaValues) =>
		PublicRequest.postData(payload, `merchant/payment-methods`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update merchant payment methods
export const putMerchantPayment = createAsyncThunk(
	'merchantPaymentMethods/putMerchantPayment',
	(payload: { data: AddMerchantPaymentMethodSchemaValues, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/payment-methods/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete merchant payment methods
export const deleteMerchantPayment = createAsyncThunk(
	'delete/deleteMerchantPayment',
	(payload: string) => PublicRequest.deleteData(`merchant/payment-methods/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// post mass destroy
export const postMerchantPaymentMass = createAsyncThunk(
	"postMerchantPaymentMass/postMerchantPaymentMass",
	(payload: any) => // todo
		PublicRequest.postData(payload, `merchant/payment-methods/mass-destroy`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
// post toggle active
export const postMerchantPaymentToggle = createAsyncThunk(
	"postMerchantPaymentToggle/postMerchantPaymentToggle",
	(payload: any) => // todo
		PublicRequest.postData(payload, `merchant/payment-methods/toggle-active/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);



