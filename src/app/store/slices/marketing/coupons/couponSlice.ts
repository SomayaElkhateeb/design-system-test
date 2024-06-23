import { createSlice } from '@reduxjs/toolkit';
import { getCouponsReducer } from './couponsExtraReducers';
import { couponsSliceModel } from 'src/app/models/couponsSliceModel';

const initialState: couponsSliceModel = {
	coupons: [
		{ id: '1', name: 'medo', value: 10, date: '22/1/2022', sales: 10, used: 2, active: false },
	],
	isLoading: false,
	error: null,
};

const couponsSlice = createSlice({
	name: 'coupons',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCouponsReducer(builder);
	},
});

export default couponsSlice.reducer;
