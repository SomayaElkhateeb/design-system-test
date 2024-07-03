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
		.addCase(getCategoriesTable.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.categoriesTable = payload?.data;
		})
		.addCase(getCategoriesTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
