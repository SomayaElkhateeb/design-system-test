import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { INoteForm } from 'src/pages/OrdersPage/OrderDetails/Forms/CustomerNoteForm';
import { orderStatusFormInterface } from 'src/pages/OrdersPage/OrderDetails/Forms/HookOrderStatus';

export const getAllOrdersPageTable = createAsyncThunk('allOrdersPage/getAllOrdersPageTable', () =>
	PublicRequest.getData('merchant/sales/orders'),
);

export const getExportOrders = createAsyncThunk('allCustomersTable/getExportCustomers', () =>
	PublicRequest.getData('merchant/sales/orders/export'),
);

export const CancelOrder = createAsyncThunk('allOrdersPage/CancelOrder', (payload: { data: { comment?: string, customer_notified?: string }, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/${payload.id}/cancel`),
);

export const ChangeOrderStatus = createAsyncThunk('allOrdersPage/ChangeOrderStatus', (payload: { data:orderStatusFormInterface, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/status/${payload.id}`),
);
export const AddOrderNote = createAsyncThunk('allOrdersPage/AddOrderNote', (payload: { data:INoteForm, id: string }) =>
	PublicRequest.postData(payload.data, `merchant/sales/orders/${payload.id}/comments`),
);


export const getOrderInfo = createAsyncThunk(
	'allCustomersTable/getOrderInfo',
	(payload: string) => PublicRequest.getData(`merchant/sales/orders/show/${payload}`),
);





