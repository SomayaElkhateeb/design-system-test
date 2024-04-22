import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URL = 'http://localhost:3007';

// get discount
export const getDiscounts = createAsyncThunk<any[]>(
	'discount/getDiscounts',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<any[]>(`${URL}/discount`);
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
export const updateDiscounts = createAsyncThunk<any[], any>(
	'discount/updateDiscounts',
	async (requestData, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.put<any[]>(
				`${URL}/discount/${requestData.discountId}`,
				requestData.updatedData,
			);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
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
