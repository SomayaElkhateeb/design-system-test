import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get data
export const getShippingMethods = createAsyncThunk('shippingMethods/getShippingMethods', () =>
	PublicRequest.getData('merchant/settings/shipping/methods'),
);
