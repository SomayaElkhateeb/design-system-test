import { createSlice } from '@reduxjs/toolkit';
import { getOrderAnalyticsTableReducer } from './orderAnalyticsTableExtraReducers';
import { AnalyticsOrder } from 'src/pages/AnalyticsPage/Orders/AnalyticsOrders';

export interface orderAnalyticsStatus {
	ordersAnalytics: AnalyticsOrder[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: orderAnalyticsStatus = {
	ordersAnalytics: [
		{
			day: '24 Apr 2024',
			orders: 15,
			average_units_ordered: 200,
			average_order_value: 'phone',
			delivered: 20,
			returned_quantity: 17,
		},
	],
	isLoading: false,
	error: null,
};

const orderAnalyticsSlice = createSlice({
	name: 'ordersAnalytics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getOrderAnalyticsTableReducer(builder);
	},
});

export const selectOrdersAnalytics = (state: { ordersAnalytics: orderAnalyticsStatus }) =>
	state.ordersAnalytics;

export default orderAnalyticsSlice.reducer;
