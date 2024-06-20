import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCustomersAnalyticsTable } from './customersAnalyticsTableAsyncThunks';
import { customerAnalyticsStatus } from './customersAnalyticsTableSlice';

export const getCustomerAnalyticsTableReducer = (
	builder: ActionReducerMapBuilder<customerAnalyticsStatus>,
) => {
	builder
		// get customer analytics table
		.addCase(getCustomersAnalyticsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCustomersAnalyticsTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.customersAnalytics = action.payload;
		})
		.addCase(getCustomersAnalyticsTable.rejected, (state) => {
			state.isLoading = false;
			state.error = null;
		});
};
