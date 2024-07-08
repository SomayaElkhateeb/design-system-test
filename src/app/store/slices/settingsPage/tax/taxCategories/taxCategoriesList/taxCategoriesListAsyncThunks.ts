import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';

// get data
export const getTaxCategoriesList = createAsyncThunk('taxCategoriesList/getTaxCategoriesList', () =>
	PublicRequest.getData('merchant/settings/tax-categories?page='),
);
