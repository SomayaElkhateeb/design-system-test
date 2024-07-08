import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getTaxRatesShow = createAsyncThunk(
	'taxRatesShow/getTaxRatesShow',
	() => PublicRequest.getData('merchant/settings/tax-rates/2'), // param id
);
