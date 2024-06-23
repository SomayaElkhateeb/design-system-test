import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getOrderAnalyticsTable } from './orderAnalyticsTableAsyncThunks';
import { ordersAnalyticsSliceModel } from 'src/app/models/ordersAnalyticsSliceModel';

export const getOrderAnalyticsTableReducer = (
	builder: ActionReducerMapBuilder<ordersAnalyticsSliceModel>,
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
		.addCase(getOrderAnalyticsTable.rejected, (state) => {
			state.isLoading = false;
			state.error = null;
		});
};
