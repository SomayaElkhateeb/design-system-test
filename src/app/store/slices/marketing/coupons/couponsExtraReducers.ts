import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCoupons } from './couponsAsyncThunks';
import { couponsSliceModel } from 'src/app/models/couponsSliceModel';

export const getCouponsReducer = (builder: ActionReducerMapBuilder<couponsSliceModel>) => {
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
