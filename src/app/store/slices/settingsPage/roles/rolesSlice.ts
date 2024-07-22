import { createSlice } from '@reduxjs/toolkit';
import { rolesReducer } from './rolesExtraReducers';
import { rolesSliceModel } from 'src/app/models/settingsModels/rolesSettingsModel';

const initialState: rolesSliceModel = {
	permissions: [],
	rolesList: [],
	isLoadingDelete: false,
	isLoading: false,
	error: null,
};

const rolesSlice = createSlice({
	name: 'rolesSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		rolesReducer(builder);
	},
});

export default rolesSlice.reducer;
