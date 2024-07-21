import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAllProductsTable, PostSimpleQuickProduct, PostUpdateQuickProduct } from './allProductsAsyncThunks';
import { productsSliceModel } from 'src/app/models/allProductsSliceModel';

export const getAllProductsReducer = (builder: ActionReducerMapBuilder<productsSliceModel>) => {
	builder
		// get products table
		.addCase(getAllProductsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllProductsTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.allProducts = payload?.data;
		})
		.addCase(getAllProductsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// add product 
		.addCase(PostSimpleQuickProduct.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostSimpleQuickProduct.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostSimpleQuickProduct.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		})

		// update product 
		.addCase(PostUpdateQuickProduct.pending, (state) => {
			state.isLoadingAddOrUpdate = true;

		})
		.addCase(PostUpdateQuickProduct.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;

		})
		.addCase(PostUpdateQuickProduct.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;

		});
};
