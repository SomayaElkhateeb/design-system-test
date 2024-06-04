import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getProductsTable } from './productsTableAsyncThunks';
import { ProductStatus } from './productsTableSlice';

export const getProductsTableReducer = (builder: ActionReducerMapBuilder<ProductStatus>) => {
	builder
		// get products table
		.addCase(getProductsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getProductsTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		})
		.addCase(getProductsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
