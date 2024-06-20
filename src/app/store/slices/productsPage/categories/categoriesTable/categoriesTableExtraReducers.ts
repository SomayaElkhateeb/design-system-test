import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCategoriesTable } from './categoriesTableAsyncThunks';
import { CategoriesStatus } from './categoriesTableTableSlice';

export const getCategoriesReducer = (builder: ActionReducerMapBuilder<CategoriesStatus>) => {
	builder
		.addCase(getCategoriesTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCategoriesTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.categories = action.payload;
		})
		.addCase(getCategoriesTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
