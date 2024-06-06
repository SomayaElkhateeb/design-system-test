import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BrandsInterface } from 'src/app/interface/BrandInterface';

const brands = [
	{
		id: '1',
		title: 'mohamed Mostafa',
		describtion: '01064545565',
		available: false,
		productsNo: 10,
		img: 'images/product.png',
	},
	{
		id: '2',
		title: 'mohamed Mostafa',
		describtion: '01064545565',
		available: false,
		productsNo: 10,
		img: 'images/product.png',
	},
];
// get brands
export const getBrandsTable = createAsyncThunk(
	'brandsTable/getBrandsTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<BrandsInterface[]>(brands);
			console.log('getBrandsTable: ', getBrandsTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error);
		}
	},
);
