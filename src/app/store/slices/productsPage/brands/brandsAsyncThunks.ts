import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getBrandsTable = createAsyncThunk('brandsTable/getBrandsTable', () =>
	PublicRequest.getData('merchant/catalog/brands/list'),
);
