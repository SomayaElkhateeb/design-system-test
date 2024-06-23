import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CustomerGroupInterface } from 'src/app/interface/CustomerGroupInterface';
const URL = 'http://localhost:3007';

// get customers group  Data
export const getCustomersGroupTable = createAsyncThunk(
	'customersGroupTable/getCustomersGroupTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<CustomerGroupInterface[]>(`${URL}/customerGroups`);
			console.log('getCustomersGroupTable: ', getCustomersGroupTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
