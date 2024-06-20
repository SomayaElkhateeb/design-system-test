import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from 'src/pages/ProductsPage/tabs/AllProducts/AllProducts';
const URL = 'http://localhost:3007';

// get inventory
export const getInventoryTable = createAsyncThunk(
	'inventoryTable/getInventoryTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<Product[]>(`${URL}/allProducts`);
			console.log('getInventoryTable: ', getInventoryTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
