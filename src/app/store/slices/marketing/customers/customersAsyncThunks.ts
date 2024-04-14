import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

interface CustomerData {}

// Define the async thunk for getting select customers
export const getSelectCustomers = createAsyncThunk<CustomerData[], void, { rejectValue: string }>(
	'customers/getSelectCustomers',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<CustomerData[]>(`${URL}/select_customers`);
			console.log('customer redux', data);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
