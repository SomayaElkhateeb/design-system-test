import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCoupons } from './couponsAsyncThunks';

interface CouponsState {
	coupons: any[]; // Define the type of coupons array
	isLoading: boolean;
	error: any;
}

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
		});
};
