import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnaylticesCustomer } from 'src/pages/AnalyticsPage/Customers/Customers';
import customersAnalyticsTableUrl from 'src/pages/AnalyticsPage/comp/data.json';

// get customers Analytics Data
export const getCustomersAnalyticsTable = createAsyncThunk(
	'customersAnalyticsTable/getCustomersAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnaylticesCustomer[]>(
				`${customersAnalyticsTableUrl}/customersAnalyticsTable`,
			);
			console.log('getCustomersAnalyticsTable: ', getCustomersAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
