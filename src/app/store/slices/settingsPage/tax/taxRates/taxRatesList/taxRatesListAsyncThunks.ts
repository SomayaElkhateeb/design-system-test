import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';

// get data
export const getTaxRatesList = createAsyncThunk('taxRatesLists/getTaxRatesList', () =>
	PublicRequest.getData('merchant/settings/tax-rates'),
);
