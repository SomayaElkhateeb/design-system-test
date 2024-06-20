import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
const URL = 'http://localhost:3007';

// get pages  Data
export const getPagesTable = createAsyncThunk('pagesTable/getPagesTable', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<BlogPostInterface[]>(`${URL}/pages`);
		console.log('getPagesTable: ', getPagesTable);
		return data;
	} catch (error) {
		throw rejectWithValue(error);
	}
});
