import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SubCategories } from 'src/pages/ProductsPage/tabs/Categories/_comp/subCategory/SubCategoryTable';

const URL = 'http://localhost:3007';

export const getSubCategories = createAsyncThunk<SubCategories[]>(
	'subCategories/getSubCategories',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<SubCategories[]>(`${URL}/subCategories`);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
