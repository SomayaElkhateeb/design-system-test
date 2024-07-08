import { createSlice } from '@reduxjs/toolkit';

import { taxCategoriesShowReducer } from './taxCategoriesShowExtraReducer';
import { taxCategoriesShowSliceModel } from 'src/app/models/settingsModels/taxModels/taxCategoriesShowModel';

const initialState: taxCategoriesShowSliceModel = {
	taxCategoriesShow: [],
	isLoading: false,
	error: null,
};

const taxCategoriesShowSlice = createSlice({
	name: 'taxCategoriesShow',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxCategoriesShowReducer(builder);
	},
});

export default taxCategoriesShowSlice.reducer;
