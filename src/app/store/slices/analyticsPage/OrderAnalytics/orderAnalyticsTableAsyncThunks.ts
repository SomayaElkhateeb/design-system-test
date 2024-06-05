import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import orderAnalyticsTable from 'src/pages/AnalyticsPage/comp/data.json';

const URL = orderAnalyticsTable;

console.log('url:', URL);

// get order Analytics Data
export const getorderAnalyticsTable = createAsyncThunk(
	'orderAnalyticsTable/getorderAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get(`${URL}/ordersAnalyticsTable`);
			console.log('getorderAnalyticsTable: ', getorderAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
