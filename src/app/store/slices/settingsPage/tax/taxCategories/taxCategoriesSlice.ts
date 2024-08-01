import { createSlice } from '@reduxjs/toolkit';

import { taxCategoriesShowReducer } from './taxCategoriesExtraReducer';
import { taxCategoriesSettingsSliceModel } from 'src/app/models/settingsModels/taxCategorySettingsModel';

const initialState: taxCategoriesSettingsSliceModel = {
	taxCategoriesList: [],
	taxCategoriesShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const taxCategoriesShowSlice = createSlice({
	name: 'taxCategorySettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxCategoriesShowReducer(builder);
	},
});

export default taxCategoriesShowSlice.reducer;
