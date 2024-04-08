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
		// Handle errors and reject with the error message
		throw rejectWithValue(error.message);
	}
});

// add coupons
export const postCoupons = createAsyncThunk<any, any>('coupon/postCoupons', async (couponData, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		// Make an HTTP POST request to your API endpoint using Axios
		const { data } = await axios.post<any>(`${URL}/coupons`, {
			body: JSON.stringify(couponData),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		// Return the data to be stored in the Redux store
		return data;
	} catch (error) {
		// Handle errors and reject with the error message
		throw rejectWithValue(error.message);
	}
});
