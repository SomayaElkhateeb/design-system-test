import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getSelectCustomers } from './customersAsyncThunks';

interface CustomersState {
	isLoading: boolean;
	error: string | null;
	customers: any[];
}

export const getCustomersReducer = (builder: ActionReducerMapBuilder<CustomersState>) => {
	builder
		// get selectCustomers
		.addCase(getSelectCustomers.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCustomers.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.customers = payload?.data;
		})
		.addCase(getSelectCustomers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
