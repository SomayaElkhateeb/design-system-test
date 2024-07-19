import { createSlice } from '@reduxjs/toolkit';
import { countriesReducer } from './countriesExtraReducers';
import { countriesSliceModel } from 'src/app/models/settingsModels/countriesSettingsModel';

const initialState: countriesSliceModel = {
	allCountries: [],
	isLoading: false,
	error: null,
};

const countriesSlice = createSlice({
	name: 'countriesSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		countriesReducer(builder);
	},
});

export default countriesSlice.reducer;
