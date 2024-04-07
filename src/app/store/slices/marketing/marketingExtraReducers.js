// import { toast } from "react-toastify";

import { getCoupons, postCoupons } from './marketingAsyncThunks';

export const getCouponsReducer = (builder) => {
	builder
		// get coupons
		.addCase(getCoupons.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCoupons.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons = action.payload;
		})
		.addCase(getCoupons.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// post coupon
		.addCase(postCoupons.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(postCoupons.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons.push(action.payload);
		})
		.addCase(postCoupons.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
