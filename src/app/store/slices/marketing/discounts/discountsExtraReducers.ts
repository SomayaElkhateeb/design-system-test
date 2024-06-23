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
	// post discounts
	// .addCase(postDiscounts.pending, (state) => {
	// 	state.isLoading = true;
	// 	state.error = null;
	// })
	// .addCase(postDiscounts.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	// if (Array.isArray(state.discounts)) {
	// 	state.discounts.push(action.payload);
	// 	// } else {
	// 	// 	state.discounts = [action.payload];
	// 	// }
	// })
	// .addCase(postDiscounts.rejected, (state, action) => {
	// 	state.isLoading = false;
	// 	state.error = action.payload;
	// })
	// // update discount
	// .addCase(updateDiscounts.pending, (state) => {
	// 	state.isLoading = true;
	// 	state.error = null;
	// })
	// .addCase(updateDiscounts.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	state.discounts = state.discounts.map((discount) => {
	// 		if (discount.id === action.payload.id) {
	// 			return action.payload;
	// 		}
	// 		return discount;
	// 	});
	// })
	// .addCase(updateDiscounts.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	// Assuming the updated discount object is returned from the backend
	// 	const updatedDiscount = action.payload;
	// 	state.discounts = state.discounts.map((discount) =>
	// 		discount.id === updatedDiscount.id ? updatedDiscount : discount,
	// 	);
	// })
	// .addCase(updateDiscounts.rejected, (state, action) => {
	// 	state.isLoading = false;
	// 	state.error = action.payload;
	// })
	// // delete discount
	// .addCase(deleteDiscount.pending, (state) => {
	// 	state.isLoading = true;
	// 	state.error = null;
	// })
	// .addCase(deleteDiscount.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	state.discounts = state.discounts.filter((el) => el.id !== action.payload);
	// })
	// .addCase(deleteDiscount.rejected, (state, action) => {
	// 	state.isLoading = false;
	// 	state.error = action.payload;
	// });
};
