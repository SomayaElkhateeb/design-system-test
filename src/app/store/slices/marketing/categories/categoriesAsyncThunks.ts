import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

export const getSelectCategories = createAsyncThunk('categories/getSelectCategories', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get(`${URL}/select_categories`);
		console.log('select_categories: ', data);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});

// export const deleteCategory = createAsyncThunk<any[], any>('categories/deleteCategory', async (id, thunkAPI) => {
// 	const { rejectWithValue } = thunkAPI;
// 	try {
// 		await axios.delete<any[]>(`${URL}/select_categories/${id}`);
// 		console.log('delete categories', id);
// 		return id;
// 	} catch (error) {
// 		throw rejectWithValue(error.message);
// 	}
// });
