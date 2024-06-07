import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';

const pages = [
	{
		id: '1',
		visibility: false,
		title: 'mohamed Mostafa',
		describtion: '01064545565',
	},
];
// get pages  Data
export const getPagesTable = createAsyncThunk('pagesTable/getPagesTable', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<BlogPostInterface[]>(pages);
		console.log('getPagesTable: ', getPagesTable);
		return data;
	} catch (error) {
		throw rejectWithValue(error);
	}
});
