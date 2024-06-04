import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import productsTableData from 'src/pages/AnalyticsPage/comp/data.json';

const URL = productsTableData;



// get Products Data
export const getProductsTable = createAsyncThunk(
	'productsTable/getProductsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get(`${URL}/productsAnalyticsTable`);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
