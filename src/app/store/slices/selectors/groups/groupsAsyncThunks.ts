import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

interface CustomerGroupData {}

export const getSelectcustomer_groups = createAsyncThunk<
	CustomerGroupData,
	void,
	{ rejectValue: string }
>('groups/getSelectcustomer_groups', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<CustomerGroupData>(`${URL}/select_customer_groups`);
		console.log('select_customer_groups', data);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});
