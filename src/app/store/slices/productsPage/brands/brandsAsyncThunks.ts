import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
const URL = 'http://localhost:3007';

// get brands
export const getBrandsTable = createAsyncThunk(
	'brandsTable/getBrandsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<BrandsInterface[]>(`${URL}/brands`);
			console.log('getBrandsTable: ', getBrandsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
