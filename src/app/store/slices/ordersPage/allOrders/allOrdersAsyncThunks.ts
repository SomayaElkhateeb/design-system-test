import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OrderInterface } from 'src/app/interface/OrderInterface';
const URL = 'http://localhost:3007';

export const getAllOrdersPageTable = createAsyncThunk(
	'allOrdersPage/getAllOrdersPageTable',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.get<OrderInterface[]>(`${URL}/allOrdersPage`);
			console.log('getAllOrdersPageTable: ', getAllOrdersPageTable);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
