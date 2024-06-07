import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAllProductsTable } from './allProductsAsyncThunks';
import { AllProductsStatus } from './allProductsTableSlice';

export const getAllProductsReducer = (builder: ActionReducerMapBuilder<AllProductsStatus>) => {
	builder
		// get c table
		.addCase(getAllProductsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllProductsTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.allProducts = action.payload;
		})
		.addCase(getAllProductsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
