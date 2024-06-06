import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnalyticsOrder } from 'src/pages/AnalyticsPage/Orders/AnalyticsOrders';
import orderAnalyticsTableUrl from 'src/pages/AnalyticsPage/comp/data.json';

// get order Analytics Data
export const getOrderAnalyticsTable = createAsyncThunk(
	'orderAnalyticsTable/getOrderAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnalyticsOrder[]>(
				`${orderAnalyticsTableUrl}/ordersAnalyticsTable`,
			);
			console.log('getOrderAnalyticsTable: ', getOrderAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
