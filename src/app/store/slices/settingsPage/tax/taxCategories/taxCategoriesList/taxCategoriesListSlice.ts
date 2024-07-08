import { createSlice } from '@reduxjs/toolkit';
import { taxCategoriesListReducer } from './taxCategoriesListExtraReducer';
import { taxCategoriesListSliceModel } from 'src/app/models/settingsModels/taxModels/taxCategoriesListModel';

const initialState: taxCategoriesListSliceModel = {
	taxCategoriesList: [],
	isLoading: false,
	error: null,
};

const taxCategoriesListSlice = createSlice({
	name: 'taxCategoriesList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxCategoriesListReducer(builder);
	},
});

export default taxCategoriesListSlice.reducer;
