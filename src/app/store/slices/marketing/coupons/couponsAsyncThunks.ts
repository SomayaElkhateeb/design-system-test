import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URL = 'http://localhost:3007';

// get coupons
export const getCoupons = createAsyncThunk<any[]>('coupon/getCoupons', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get<any[]>(`${URL}/coupons`);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});

// add coupons
export const postCoupons = createAsyncThunk<any, any>('coupon/postCoupons', async (couponData, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.post<any>(`${URL}/coupons`, couponData);
		console.log('post coupons', data);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});

// delete Coupons
export const deleteCoupons = createAsyncThunk<any[], any>('coupons/deleteCoupons', async (id, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		await axios.delete<any[]>(`${URL}/coupons/${id}`);
		return id;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});
