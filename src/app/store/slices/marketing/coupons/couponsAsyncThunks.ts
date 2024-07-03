import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getCoupons = createAsyncThunk('coupon/getCoupons', () =>
	PublicRequest.getData('merchant/marketing/promotions/cart-rules/1/coupons'),
);

