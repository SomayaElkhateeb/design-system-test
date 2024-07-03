import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getAllProductsTable = createAsyncThunk('allProductsTable/getAllProductsTable', () =>
	PublicRequest.getData('merchant/catalog/products'),
);
