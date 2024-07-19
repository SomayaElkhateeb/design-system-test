import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddTaxRateSchemaValues } from 'src/app/schema/settings/AddTaxRateSchema';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

// get Tax Rates List data
export const getTaxRatesList = createAsyncThunk('taxRates/getTaxRatesList', () =>
	PublicRequest.getData('merchant/settings/tax-rates'),
);

// get Tax Rates Show
export const getTaxRatesShow = createAsyncThunk(
	'taxRatesShow/getTaxRatesShow',
	() => PublicRequest.getData('merchant/settings/tax-rates/2'), // param id
);

// create tax rates 
export const createTaxRate = createAsyncThunk(
	"taxRates/createTaxRate",
	(payload: AddTaxRateSchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/tax-rates`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update user
export const updateTaxRate = createAsyncThunk(
	'taxRates/updateTaxRate',
	(payload: { data: AddTaxRateSchemaValues, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/settings/tax-rates/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete tax rate
export const deleteTaxRate = createAsyncThunk(
	'delete/deleteTaxRate',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/tax-rates/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);



