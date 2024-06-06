import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { allCustomerStatus } from './customersAnalyticsTableSlice';
import { getAllCustomersTable } from './customersTableAsyncThunks';

export const getAllCustomerTableReducer = (builder: ActionReducerMapBuilder<allCustomerStatus>) => {
	builder
		// get all customer  table
		.addCase(getAllCustomersTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getAllCustomersTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.allCustomer = action.payload;
		})
		.addCase(getAllCustomersTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
