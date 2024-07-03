import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getSelectProducts } from './productsAsyncThunks';

interface ProductsState {
	isLoading: boolean;
	error: any;
	products: any[];
}

export const getProductsReducer = (builder: ActionReducerMapBuilder<ProductsState>) => {
	builder

		.addCase(getSelectProducts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})

		.addCase(getSelectProducts.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.products = payload?.data;
		})

		.addCase(getSelectProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
