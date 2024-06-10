import { createSlice } from '@reduxjs/toolkit';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import { getImageUrl } from 'src/app/utils';
import { getBlogTableReducer } from './blogTableExtraReducers';

export interface blogStatus {
	blog: BlogPostInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: blogStatus = {
	blog: [
		{
			id: '1',
			visibility: false,
			img: getImageUrl('images/product.png'),
			title: 'mohamed Mostafa',
			describtion: '01064545565',
		},
	],
	isLoading: false,
	error: null,
};

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getBlogTableReducer(builder);
	},
});

export const selectBlog = (state: { blog: blogStatus }) => state.blog;

export default blogSlice.reducer;
