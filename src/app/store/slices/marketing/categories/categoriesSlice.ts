import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesReducer } from './categoriesExtraReducers';

// Define the type for the category item
interface Category {
	id: string;
	// Add other properties here
}

// Define the type for the initial state
interface CategoriesState {
	categories: Category[];
	isLoading: boolean;
	error: string | null;
}

// Define the initial state
const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
};

// Create the categories slice
const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCategoriesReducer(builder);
	},
});

// Define a selector function to select categories from the state
export const selectCategories = (state: { categories: CategoriesState }) => state.categories;

// Export the reducer
export default categoriesSlice.reducer;
