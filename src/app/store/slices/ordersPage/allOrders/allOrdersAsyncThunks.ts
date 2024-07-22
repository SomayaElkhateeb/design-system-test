import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getAllOrdersPageTable = createAsyncThunk('allOrdersPage/getAllOrdersPageTable', () =>
	PublicRequest.getData('merchant/sales/orders'),
);
