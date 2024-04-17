import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCoupons, postCoupons } from './couponsAsyncThunks';
import { CouponsState } from './couponSlice';



export const getCouponsReducer = (builder: ActionReducerMapBuilder<CouponsState>) => {
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
		// post coupons
		.addCase(postCoupons.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(postCoupons.fulfilled, (state, action) => {
			state.isLoading = false;
			if (Array.isArray(state.coupons)) {
				state.coupons.push(action.payload);
			} else {
				state.coupons = [action.payload];
			}
		})
		.addCase(postCoupons.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
