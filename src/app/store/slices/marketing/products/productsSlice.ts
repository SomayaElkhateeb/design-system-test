import { createSlice } from '@reduxjs/toolkit';
import { getProductsReducer } from './productsExtraReducers';

// initialState
const initialState = { products: [], isLoading: false, error: null };

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getProductsReducer(builder);
	},
});

export const selectProduct = (state) => state.products;

export default productSlice.reducer;
