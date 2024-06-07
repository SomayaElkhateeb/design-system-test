import { createSlice } from '@reduxjs/toolkit';
import { getPagesTableReducer } from './pagesTableExtraReducers';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';

export interface pagesStatus {
	pages: BlogPostInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: pagesStatus = {
	pages: [
		{
			id: '1',
			visibility: false,
			title: 'mohamed Mostafa',
			describtion: '01064545565',
		},
	],
	isLoading: false,
	error: null,
};

const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getPagesTableReducer(builder);
	},
});

export const selectPages = (state: { pages: pagesStatus }) => state.pages;

export default pagesSlice.reducer;
