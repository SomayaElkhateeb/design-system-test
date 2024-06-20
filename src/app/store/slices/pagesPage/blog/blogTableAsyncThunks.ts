import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';

const URL = 'http://localhost:3007';
// get blog  Data
export const getBlogTable = createAsyncThunk('blogTable/getBlogTable', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<BlogPostInterface[]>(`${URL}/blog`);
		console.log('getBlogTable: ', getBlogTable);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});
