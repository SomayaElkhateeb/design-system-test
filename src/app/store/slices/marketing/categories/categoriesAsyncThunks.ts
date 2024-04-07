import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3007';

// Define the type of the response data
interface SelectCategory {
	id: number;
	src_image: string;
	category: string;
	description: string;
}

// Define the return type of the thunk
type ThunkReturn = SelectCategory[];

// Define the thunk action
export const getSelectCategories = createAsyncThunk<ThunkReturn, void>(
	'categories/getSelectCategories',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			// Make an HTTP GET request to your API endpoint using Axios
			const { data } = await axios.get<ThunkReturn>(`${URL}/select_categories`);

			// Return the data to be stored in the Redux store
			return data;
		} catch (error) {
			// Handle errors and reject with the error message
			throw rejectWithValue(error.message);
		}
	},
);
