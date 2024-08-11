import { createSlice } from '@reduxjs/toolkit';
import { attributesReducer } from './attributeExtraReducers';
import { attributesSliceModel } from 'src/app/models/attributeSliceModel';

const initialState: attributesSliceModel = {
	attributes: [],
	attributeShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const attributesSlice = createSlice({
	name: 'attributes',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		attributesReducer(builder);
	},
});

export default attributesSlice.reducer;
