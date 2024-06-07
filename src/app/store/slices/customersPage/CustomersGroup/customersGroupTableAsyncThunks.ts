import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CustomerGroupInterface } from 'src/app/interface/CustomerGroupInterface';

const customerGroups = [
	{
		id: '1',
		name: 'group1',
		customerNumber: 45,
		describtion: 'high group',
		active: true,
	},
	{
		id: '2',
		name: 'group1',
		customerNumber: 45,
		describtion: 'high group',
		active: true,
	},
];

// get customers group  Data
export const getCustomersGroupTable = createAsyncThunk(
	'customersGroupTable/getCustomersGroupTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<CustomerGroupInterface[]>(customerGroups);
			console.log('getCustomersGroupTable: ', getCustomersGroupTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
