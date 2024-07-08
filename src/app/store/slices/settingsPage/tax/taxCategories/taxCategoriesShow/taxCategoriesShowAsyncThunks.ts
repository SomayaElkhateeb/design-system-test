import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';

// get data
export const getTaxCategoriesShow = createAsyncThunk(
	'taxCategoriesShow/getTaxCategoriesShow',
	(payload: string) => PublicRequest.getData(`merchant/settings/tax-categories/${payload}`),
);
