import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getCustomersGroupTable = createAsyncThunk(
	'customersGroupTable/getCustomersGroupTable',
	() => PublicRequest.getData('merchant/customers/groups/list'),
);
