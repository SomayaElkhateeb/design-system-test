import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnalyticsOrder } from 'src/pages/AnalyticsPage/tabs/Orders/AnalyticsOrders';
const URL = 'http://localhost:3007';

// get order Analytics Data
export const getOrderAnalyticsTable = createAsyncThunk(
	'orderAnalyticsTable/getOrderAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnalyticsOrder[]>(`${URL}/ordersAnalyticsTable`);
			console.log('getOrderAnalyticsTable: ', getOrderAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
