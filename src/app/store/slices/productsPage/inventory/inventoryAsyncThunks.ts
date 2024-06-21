import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, allProducts } from 'src/pages/ProductsPage/_comp/data';

const inventory = allProducts;
// get inventory
export const getInventoryTable = createAsyncThunk(
	'inventoryTable/getInventoryTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<Product[]>(inventory);
			console.log('getInventoryTable: ', getInventoryTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
