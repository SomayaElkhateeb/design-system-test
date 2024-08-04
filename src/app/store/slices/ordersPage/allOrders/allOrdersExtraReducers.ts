import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getAllOrdersPageTable, getOrderInfo } from './allOrdersAsyncThunks';
import { allOrdersSliceModel } from 'src/app/models/allOrdersPageSliceModel';

export const getAllOrdersTableReducer = (builder: ActionReducerMapBuilder<allOrdersSliceModel>) => {
	builder

		.addCase(getAllOrdersPageTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllOrdersPageTable.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.allOrders = payload?.data;
		})
		.addCase(getAllOrdersPageTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		.addCase(getOrderInfo.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getOrderInfo.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.ordderItem = payload?.data;
		})
		.addCase(getOrderInfo.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
