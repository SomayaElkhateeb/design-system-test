import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getProductsAnalyticsTable } from './productsAnalyticsTableAsyncThunks';
import { ProductAnalyticsStatus } from './productsAnalyticsTableSlice';

export const getProductsAnalyticsTableReducer = (
	builder: ActionReducerMapBuilder<ProductAnalyticsStatus>,
) => {
	builder
		// get products analytics table
		.addCase(getProductsAnalyticsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getProductsAnalyticsTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.productsAnalytics = action.payload;
		})
		.addCase(getProductsAnalyticsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
