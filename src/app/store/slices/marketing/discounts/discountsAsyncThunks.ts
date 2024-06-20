import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DiscountInterface } from 'src/app/interface/DiscountInterface';
const URL = 'http://localhost:3007';

// get discount
export const getDiscounts = createAsyncThunk<DiscountInterface[]>(
	'discount/getDiscounts',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<DiscountInterface[]>(`${URL}/discount`);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);

// createAsyncThunk to fetch discounts
export const postDiscounts = createAsyncThunk<any[], any>(
	'discount/postDiscounts',
	async (requestData, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.post<any[]>(`${URL}/discount`, requestData);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);

// update discounts
// export const updateDiscounts = createAsyncThunk<any[], any>(
// 	'discount/updateDiscounts',
// 	async (requestData, thunkAPI) => {
// 		const { rejectWithValue } = thunkAPI;
// 		try {
// 			const { data } = await axios.put<any[]>(`${URL}/discount/${requestData}`);
// 			return data;
// 		} catch (error) {
// 			throw rejectWithValue(error.message);
// 		}
// 	},
// );

export const updateDiscounts = createAsyncThunk(
	'discount/updateDiscounts',
	async ({ id, updatedData }, thunkAPI) => {
		try {
			const response = await axios.put(`http://localhost:3007/discount/${id}`, updatedData);
			return response.data; // Assuming the updated data is returned from the backend
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

// delete discount
export const deleteDiscount = createAsyncThunk<any[], any>(
	'discount/deleteDiscount',
	async (id, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			await axios.delete<any[]>(`${URL}/discount/${id}`);
			return id;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
