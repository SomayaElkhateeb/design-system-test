import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AddPaymentMethodSchemaValues } from 'src/app/schema/settings/AddPaymentMethodSchema';

// get payment methods
export const getPaymentMethods = createAsyncThunk('paymentMethods/getPaymentMethods', () =>
	PublicRequest.getData('merchant/payment/payment-methods'),
);

// get payment method Show
export const getPaymentMethodShow = createAsyncThunk(
	'paymentMethodShow/getPaymentMethodShow',
	(payload: number) => PublicRequest.getData(`merchant/payment/payment-methods/${payload}`), // param id
);

// create payment Methods 
export const createPaymentMethod = createAsyncThunk(
	"paymentMethods/createPaymentMethod",
	(payload: AddPaymentMethodSchemaValues) =>
		PublicRequest.postData(payload, `merchant/payment/payment-methods`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);




