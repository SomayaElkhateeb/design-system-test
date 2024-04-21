import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getDiscounts, postDiscounts, deleteDiscount } from './discountsAsyncThunks';
import { DiscountState } from './discountSlice';

export const getDiscountReducer = (builder: ActionReducerMapBuilder<DiscountState>) => {
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
		})
		// post discounts
		.addCase(postDiscounts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(postDiscounts.fulfilled, (state, action) => {
			state.isLoading = false;
			// if (Array.isArray(state.discounts)) {
			state.discounts.push(action.payload);
			// } else {
			// 	state.discounts = [action.payload];
			// }
		})
		.addCase(postDiscounts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// delete discount
		.addCase(deleteDiscount.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(deleteDiscount.fulfilled, (state, action) => {
			state.isLoading = false;
			state.discounts = state.discounts.filter((el) => el.id !== action.payload);
		})
		.addCase(deleteDiscount.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
