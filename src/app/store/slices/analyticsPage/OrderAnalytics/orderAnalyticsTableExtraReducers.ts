import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getOrderAnalyticsTable } from './orderAnalyticsTableAsyncThunks';
import { orderAnalyticsStatus } from './orderAnalyticsTableSlice';

export const getOrderAnalyticsTableReducer = (
	builder: ActionReducerMapBuilder<orderAnalyticsStatus>,
) => {
	builder
		// get order analytics table
		.addCase(getOrderAnalyticsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getOrderAnalyticsTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.ordersAnalytics = action.payload;
		})
		.addCase(getOrderAnalyticsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
