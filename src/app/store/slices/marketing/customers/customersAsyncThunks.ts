import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

// Define the type for the data returned by the async thunk
interface CustomerData {
	// Define the structure of the data returned by the API
}

// Define the async thunk for getting select customers
export const getSelectCustomers = createAsyncThunk<CustomerData, void, { rejectValue: string }>(
	'customers/getSelectCustomers',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			// Make an HTTP GET request to the API endpoint using Axios
			const { data } = await axios.get<CustomerData>(`${URL}/select_customers`);

			// Return the data to be stored in the Redux store
			return data;
		} catch (error) {
			// Handle errors and reject with the error message
			throw rejectWithValue(error.message);
		}
	},
);
