import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from 'src/pages/ProductsPage/tabs/Categories/Categories';
const URL = 'http://localhost:3007';

export const getCategoriesTable = createAsyncThunk(
	'CategoriesTable/getCategoriesTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<Category[]>(`${URL}/categories`);
			console.log('getCategoriesTable: ', getCategoriesTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
