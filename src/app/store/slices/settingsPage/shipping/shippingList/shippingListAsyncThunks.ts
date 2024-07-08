import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get data
export const getShippingList = createAsyncThunk('shippingLists/getShippingList', () =>
	PublicRequest.getData('merchant/settings/shipping/methods/list'),
);
