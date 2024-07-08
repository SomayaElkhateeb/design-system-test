import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getTaxCategoriesList } from './taxCategoriesListAsyncThunks';
import { taxCategoriesListSliceModel } from 'src/app/models/settingsModels/taxModels/taxCategoriesListModel';

export const taxCategoriesListReducer = (
	builder: ActionReducerMapBuilder<taxCategoriesListSliceModel>,
) => {
	builder
		.addCase(getTaxCategoriesList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxCategoriesList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxCategoriesList = payload;
		})
		.addCase(getTaxCategoriesList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
