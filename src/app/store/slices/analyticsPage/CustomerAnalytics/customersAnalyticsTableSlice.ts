import { createSlice } from '@reduxjs/toolkit';
import { AnaylticesCustomer } from 'src/pages/AnalyticsPage/Customers/Customers';
import { getCustomerAnalyticsTableReducer } from './customersAnalyticsTableExtraReducers';

export interface customerAnalyticsStatus {
	customersAnalytics: AnaylticesCustomer[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: customerAnalyticsStatus = {
	customersAnalytics: [
		{
			day: '24 Apr 2024',
			new_customers: 1200,
			purchasing_customers: '420 (12%)',
			customer_groups: '520',
		},
	],
	isLoading: false,
	error: null,
};

const customerAnalyticsSlice = createSlice({
	name: 'customersAnalytics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCustomerAnalyticsTableReducer(builder);
	},
});

export const selectCustomerAnalytics = (state: { customersAnalytics: customerAnalyticsStatus }) =>
	state.customersAnalytics;

export default customerAnalyticsSlice.reducer;
