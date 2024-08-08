import { createSlice } from '@reduxjs/toolkit';
import { taxCategoriesShowReducer } from './couponExtraReducer';
import { handelDefaultValue, taxRateSettingsSliceModel } from 'src/app/models/settingsModels/taxRateSettingsModel';

const initialState: taxRateSettingsSliceModel = {
	taxRatesList: [],
	taxRatesShow: handelDefaultValue(),
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const taxCategoriesShowSlice = createSlice({
	name: 'couponPage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxCategoriesShowReducer(builder);
	},
});

export default taxCategoriesShowSlice.reducer;
