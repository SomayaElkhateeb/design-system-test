import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnalyticsCustomer } from 'src/pages/AnalyticsPage/tabs/Customers/AnalyticsCustomers';
const URL = 'http://localhost:3007';

// get customers Analytics Data
export const getCustomersAnalyticsTable = createAsyncThunk(
	'customersAnalyticsTable/getCustomersAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnalyticsCustomer[]>(`${URL}/customersAnalyticsTable`);
			console.log('getCustomersAnalyticsTable: ', getCustomersAnalyticsTable);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
