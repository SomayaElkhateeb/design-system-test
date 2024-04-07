import { getSelectCustomers } from './customersAsyncThunks';

export const getCustomersReducer = (builder) => {
	builder
		// get selectCustomers
		.addCase(getSelectCustomers.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCustomers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons.push(action.payload);
		})
		.addCase(getSelectCustomers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
