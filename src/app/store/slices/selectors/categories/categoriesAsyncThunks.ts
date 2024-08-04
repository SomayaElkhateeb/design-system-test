import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

export const getSelectCategories = createAsyncThunk('categories/getSelectCategories', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get(`${URL}/select_categories`);
		// console.log('select_categories: ', data);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});
