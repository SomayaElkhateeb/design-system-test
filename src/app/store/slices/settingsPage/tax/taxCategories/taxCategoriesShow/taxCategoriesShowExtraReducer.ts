import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getTaxCategoriesShow } from './taxCategoriesShowAsyncThunks';
import { taxCategoriesShowSliceModel } from 'src/app/models/settingsModels/taxModels/taxCategoriesShowModel';

export const taxCategoriesShowReducer = (
	builder: ActionReducerMapBuilder<taxCategoriesShowSliceModel>,
) => {
	builder
		.addCase(getTaxCategoriesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxCategoriesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxCategoriesShow = payload.data;
		})
		.addCase(getTaxCategoriesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
