import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getAllOrdersPageTable = createAsyncThunk('allOrdersPage/getAllOrdersPageTable', () =>
	PublicRequest.getData('merchant/sales/orders'),
);

export const CancelOrder = createAsyncThunk('allOrdersPage/CancelOrder', (payload: { data: { comment?: string, customer_notified?: string }, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/${payload.id}/cancel`),
);
