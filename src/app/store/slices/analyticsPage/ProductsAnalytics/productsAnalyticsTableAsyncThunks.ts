import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnalyticsProduct } from 'src/pages/AnalyticsPage/tabs/Products/AnalyticsProducts';
const URL = 'http://localhost:3007';

// get Products Analytics Data
export const getProductsAnalyticsTable = createAsyncThunk(
	'productsAnalyticsTable/getProductsAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnalyticsProduct[]>(`${URL}/productsAnalyticsTable`);
			console.log('getProductsAnalyticsTable: ', getProductsAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
