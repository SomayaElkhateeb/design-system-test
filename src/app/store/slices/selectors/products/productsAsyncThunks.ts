import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

interface ProductData {}

// Define the async thunk for getting select products
export const getSelectProducts = createAsyncThunk<ProductData[], void, { rejectValue: string }>(
	'coupon/getSelectProducts',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<ProductData[]>(`${URL}/select_products`);
			// console.log('select_products', data);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
