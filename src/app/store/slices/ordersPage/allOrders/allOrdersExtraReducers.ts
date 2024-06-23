import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAllOrdersPageTable } from './allOrdersAsyncThunks';
import { allOrdersSliceModel } from 'src/app/models/allOrdersPageSliceModel';

export const getAllOrdersTableReducer = (builder: ActionReducerMapBuilder<allOrdersSliceModel>) => {
	builder

		.addCase(getAllOrdersPageTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllOrdersPageTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.allOrders = action.payload;
		})
		.addCase(getAllOrdersPageTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};