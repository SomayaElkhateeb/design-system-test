import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';
const URL = 'http://localhost:3007';

// get all customers  Data
export const getAllCustomersTable = createAsyncThunk(
	'allCustomersTable/getAllCustomersTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<CustomerInterface[]>(`${URL}/allCustomers`);
			console.log('getAllCustomersTable: ', getAllCustomersTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
