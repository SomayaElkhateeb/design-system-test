import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getPagesTable } from './pagesTableAsyncThunks';
import { pagesSliceModel } from 'src/app/models/pagesSliceModel';

export const getPagesTableReducer = (builder: ActionReducerMapBuilder<pagesSliceModel>) => {
	builder
		// get pages table
		.addCase(getPagesTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPagesTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.pages = action.payload;
		})
		.addCase(getPagesTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
