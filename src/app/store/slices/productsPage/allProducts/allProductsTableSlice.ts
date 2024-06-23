import { createSlice } from '@reduxjs/toolkit';
import { getAllProductsReducer } from './allProductsExtraReducers';
import { productsSliceModel } from 'src/app/models/allProductsSliceModel';

const initialState: productsSliceModel = {
	allProducts: [],
	isLoading: false,
	error: null,
};

const allProductsSlice = createSlice({
	name: 'allProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllProductsReducer(builder);
	},
});

// export const selectAllProducts = (state: { allProducts: AllProductsStatus }) => state.allProducts;

export default allProductsSlice.reducer;
