import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from 'src/app/interface/ProductInterface';

const allProducts = [
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
// get all products
export const getAllProductsTable = createAsyncThunk(
	'allProductsTable/getAllProductsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<Product[]>(allProducts);
			console.log('getAllProductsTable: ', getAllProductsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
