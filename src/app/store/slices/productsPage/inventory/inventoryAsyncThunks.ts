import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from 'src/app/interface/ProductInterface';

const inventory = [
	{
		id: '1',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 10,
		price: 1000,
		imageUrl: 'images/product.png',
	},
	{
		id: '2',
		name: 'mohamed Mostafa',
		category: 'blanket',
		SKU: 'mansoura',
		option: 10,
		quantity: 0,
		price: 1000,
		imageUrl: 'images/product.png',
	},
];
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
