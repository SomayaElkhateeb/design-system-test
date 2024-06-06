import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnaylticesOrder } from 'src/pages/AnalyticsPage/Orders/Orders';
import orderAnalyticsTableUrl from 'src/pages/AnalyticsPage/comp/data.json';

// get order Analytics Data
export const getOrderAnalyticsTable = createAsyncThunk(
	'orderAnalyticsTable/getOrderAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnaylticesOrder[]>(
				`${orderAnalyticsTableUrl}/ordersAnalyticsTable`,
			);
			console.log('getOrderAnalyticsTable: ', getOrderAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
