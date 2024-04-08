import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

// get discount
export const getDiscounts = createAsyncThunk<any[]>('discount/getDiscounts', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<any[]>(`${URL}/discount`);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});
