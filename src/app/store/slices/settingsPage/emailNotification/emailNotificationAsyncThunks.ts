import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AddTaxCategorySchemaValues } from 'src/app/schema/settings/AddTaxCategorySchema';

// get email notification List data
export const getEmailNotificationList = createAsyncThunk('emailNotification/getEmailNotificationList', () =>
	PublicRequest.getData('merchant/settings/email-notification'),
);

// get email notification Show data
export const getEmailNotificationShow = createAsyncThunk(
	'emailNotificationShow/getEmailNotificationShow',
	(payload: string) => PublicRequest.getData(`merchant/settings/email-notification/${payload}`),
);

// create tax category 
export const createTaxCategory = createAsyncThunk(
	"taxCategories/createTaxCategory",
	(payload: AddTaxCategorySchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/email-notification`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update tax category
export const updateTaxCategory = createAsyncThunk(
	'taxCategories/updateTaxCategory',
	(payload: { data: AddTaxCategorySchemaValues, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/settings/tax-categories/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete tax category
export const deleteTaxCategory = createAsyncThunk(
	'delete/deleteTaxCategory',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/tax-categories/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);