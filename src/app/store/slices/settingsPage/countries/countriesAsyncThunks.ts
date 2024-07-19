import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get all countries data
export const getCountries = createAsyncThunk('countries/getCountries', () =>
	PublicRequest.getData('merchant/settings/countries'),
);

