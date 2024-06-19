import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AnalyticsCustomer } from 'src/pages/AnalyticsPage/tabs/Customers/AnalyticsCustomers';
import customersAnalyticsTableUrl from 'src/pages/AnalyticsPage/_comp/data.json';

// get customers Analytics Data
export const getCustomersAnalyticsTable = createAsyncThunk(
	'customersAnalyticsTable/getCustomersAnalyticsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<AnalyticsCustomer[]>(
				`${customersAnalyticsTableUrl}/customersAnalyticsTable`,
			);
			console.log('getCustomersAnalyticsTable: ', getCustomersAnalyticsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
