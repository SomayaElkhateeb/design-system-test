import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCategoriesTable } from './categoriesTableAsyncThunks';
import { categoriesTableSliceModel } from 'src/app/models/categoriesTableSliceModel';

export const getCategoriesReducer = (
	builder: ActionReducerMapBuilder<categoriesTableSliceModel>,
) => {
	builder
		.addCase(getCategoriesTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCategoriesTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.categoriesTable = action.payload;
		})
		.addCase(getCategoriesTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
