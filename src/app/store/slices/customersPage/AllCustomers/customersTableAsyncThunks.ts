import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';
const customers = [
	{
		id: '1',
		name: 'mohamed Mostafa',
		first_name: 'Mohamed',
		last_name: 'Mostafa',
		mobile: '01064545565',
		city: 'mansoura',
		Orders: 10,
		email: 'mmmm@yahoo.com',
		'E-Subscription': true,
	},
];
// get all customers  Data
export const getAllCustomersTable = createAsyncThunk(
	'allCustomersTable/getAllCustomersTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<CustomerInterface[]>(customers);
			console.log('getAllCustomersTable: ', getAllCustomersTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
