import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, allProducts } from 'src/pages/ProductsPage/_comp/data';

// Async thunk to fetch all products
export const getAllProductsTable = createAsyncThunk(
	'allProductsTable/getAllProductsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			// Fetching products from a hypothetical endpoint
			const { data } = await axios.get<Product[]>(allProducts);
			// const { data } = await axios.get<Product[]>('/api/products');
			console.log('getAllProductsTable: ', data);
			return data;
		} catch (error) {
			throw rejectWithValue(error?.response?.data);
		}
	},
);
