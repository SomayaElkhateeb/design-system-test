import { createSlice } from '@reduxjs/toolkit';
import { getBrandsReducer } from './brandsExtraReducers';
import { brandsSliceModel } from 'src/app/models/brandsSliceModel';

const initialState: brandsSliceModel = {
	brands: [],
	isLoading: false,
	error: null,
};

const brandsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getBrandsReducer(builder);
	},
});

export default brandsSlice.reducer;
