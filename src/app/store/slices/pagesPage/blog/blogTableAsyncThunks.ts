import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import { getImageUrl } from 'src/app/utils';

const blog = [
	{
		id: '1',
		visibility: false,
		img: getImageUrl('images/product.png'),
		title: 'mohamed Mostafa',
		describtion: '01064545565',
	},
];
// get blog  Data
export const getBlogTable = createAsyncThunk('blogTable/getBlogTable', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<BlogPostInterface[]>(blog);
		console.log('getBlogTable: ', getBlogTable);
		return data;
	} catch (error) {
		throw rejectWithValue(error);
	}
});
