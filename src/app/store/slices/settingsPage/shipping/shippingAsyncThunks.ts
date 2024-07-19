import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get Shipping List data
export const getShippingList = createAsyncThunk('shippingLists/getShippingList', () =>
	PublicRequest.getData('merchant/settings/shipping/methods/list'),
);

// get Shipping Methods data
export const getShippingMethods = createAsyncThunk('shippingMethods/getShippingMethods', () =>
	PublicRequest.getData('merchant/settings/shipping/methods'),
);