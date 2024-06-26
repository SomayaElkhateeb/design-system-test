import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getAllCustomersTable = createAsyncThunk('allCustomersTable/getAllCustomersTable', () =>
	PublicRequest.getData('allCustomers'),
);
