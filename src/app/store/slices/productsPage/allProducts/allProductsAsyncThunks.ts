import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from 'src/pages/ProductsPage/_comp/data';

// Async thunk to fetch all products
const URL = 'http://localhost:3007';

// get all products
export const getAllProductsTable = createAsyncThunk(
	'allProductsTable/getAllProductsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<Product[]>(`${URL}/allProducts`);
			console.log('getAllProductsTable: ', getAllProductsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
