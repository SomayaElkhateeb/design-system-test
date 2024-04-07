import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

// get discounts
export const getDiscounts = createAsyncThunk('discount/getDiscounts', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		// Make an HTTP GET request to your API endpoint using Axios
		const { data } = await axios.get(`${URL}/discount`);

		// Return the data to be stored in the Redux store
		return data;
	} catch (error) {
		// Handle errors and reject with the error message
		throw rejectWithValue(error.message);
	}
});

// get select categories
export const getSelectCategories = createAsyncThunk('coupon/getSelectCategories', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get(`${URL}/select_categories`);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});

// get select Products
export const getSelectProducts = createAsyncThunk('coupon/getSelectProducts', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get(`${URL}/select_products`);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});

// get select_customer_groups
export const getSelectCustomerGroups = createAsyncThunk('coupon/getSelectCustomerGroups', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get(`${URL}/select_customer_groups`);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});

// get select_customer_groups
export const getSelectCustomers = createAsyncThunk('coupon/getSelectCustomers', async (_, thunkAPI) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const { data } = await axios.get(`${URL}/select_customers`);
		return data;
	} catch (error) {
		throw rejectWithValue(error.message);
	}
});
