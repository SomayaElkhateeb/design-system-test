import { createSlice } from '@reduxjs/toolkit';
import { getBrandsReducer } from './brandsExtraReducers';
import { BrandsInterface } from 'src/app/interface/BrandInterface';

export interface brandsStatus {
	brands: BrandsInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: brandsStatus = {
	brands: [
		{
			id: '1',
			title: 'mohamed Mostafa',
			describtion: '01064545565',
			available: false,
			productsNo: 10,
			img: 'images/product.png',
		},
		{
			id: '2',
			title: 'mohamed Mostafa',
			describtion: '01064545565',
			available: false,
			productsNo: 10,
			img: 'images/product.png',
		},
	],
	isLoading: false,
	error: null,
};

const brandsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getBrandsReducer(builder);
	},
});

export const selectBrands = (state: { brands: brandsStatus }) => state.brands;

export default brandsSlice.reducer;
