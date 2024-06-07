import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getBlogTable } from './blogTableAsyncThunks';
import { blogStatus } from './blogTableSlice';

export const getBlogTableReducer = (builder: ActionReducerMapBuilder<blogStatus>) => {
	builder
		// get Blog table
		.addCase(getBlogTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getBlogTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.blog = action.payload;
		})
		.addCase(getBlogTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
