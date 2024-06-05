import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import productsAnalyticsTable from 'src/pages/AnalyticsPage/comp/data.json';

const URL = productsAnalyticsTable;

console.log('url:', URL);

// get Products Analytics Data
export const getProductsAnalyticsTable = createAsyncThunk(
	'productsAnalyticsTable/getProductsAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get(`${URL}/productsAnalyticsTable`);
			console.log('getProductsAnalyticsTable: ', getProductsAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
