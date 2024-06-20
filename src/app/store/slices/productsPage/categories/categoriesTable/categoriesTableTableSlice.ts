import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesReducer } from './categoriesTableExtraReducers';

export interface CategoriesStatus {
	categories: Category[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: CategoriesStatus = {
	categories: [
		{
			id: '1',
			img: 'images/product.png',
			name: 'General Wellness',
			subtitle: 'lorem ipsum dolor sit amet dolor ...',
			products: 51,
			subcategories: 179,
			active: true,
		},
	],
	isLoading: false,
	error: null,
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCategoriesReducer(builder);
	},
});

export const selectCategories = (state: { categories: CategoriesStatus }) => state.categories;

export default categoriesSlice.reducer;
