import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getDiscounts } from './discountsAsyncThunks';
import { discountSliceModel } from 'src/app/models/discountSliceModel';

export const getDiscountReducer = (builder: ActionReducerMapBuilder<discountSliceModel>) => {
	builder
		// get discounts
		.addCase(getDiscounts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getDiscounts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.discounts = action.payload;
		})
		.addCase(getDiscounts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
