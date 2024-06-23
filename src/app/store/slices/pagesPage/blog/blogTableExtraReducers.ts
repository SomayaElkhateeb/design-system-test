import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getBlogTable } from './blogTableAsyncThunks';
import { blogSliceModel } from 'src/app/models/blogSliceModel';

export const getBlogTableReducer = (builder: ActionReducerMapBuilder<blogSliceModel>) => {
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
