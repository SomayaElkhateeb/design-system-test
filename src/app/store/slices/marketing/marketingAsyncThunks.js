// import { createAsyncThunk } from '@reduxjs/toolkit';
// import dataJson from 'src/pages/MarketingPage/Coupons/AddCoupon/comp/data.json';

// // fetch discounts
// export const getDiscounts = createAsyncThunk('discount/getDiscounts', async (_, { thunkAPI }) => {
// 	try {
// 		const { data } = await dataJson.get(`${dataJson}/discount`);
// 		return data;
// 	} catch (error) {
// 		throw thunkAPI.rejectWithValue(error.message);
// 	}
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import dataJson from 'src/pages/MarketingPage/Coupons/AddCoupon/comp/data.json';

// fetch discounts
export const getDiscounts = createAsyncThunk('discount/getDiscounts', async (_, { thunkAPI }) => {
	try {
		// Simply return the imported JSON data
		return dataJson;
	} catch (error) {
		throw thunkAPI.rejectWithValue(error.message);
	}
});

// add discount
// export const addDiscount = createAsyncThunk(
//   "discount/addDiscount",
//   async (discountData, { thunkAPI }) => {
//     try {
//       const { data } = await api.post("/discount", discountData);
//       return data;
//     } catch (error) {
//       console.error("Error adding discount:", error);
//       throw thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
