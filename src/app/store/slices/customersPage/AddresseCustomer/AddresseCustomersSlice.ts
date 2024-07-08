import { createSlice } from '@reduxjs/toolkit';
import { AddressesCustomerSliceModel } from 'src/app/models/AddressesCustomerSliceModel';
import { getAllCustomerAddressesReducer } from './AddressesCustomerExtraReducers';


const initialState: AddressesCustomerSliceModel = {
	Addresses: [],
	isLoading: false,
	isLoadingAddOrUpdate: false,
	error: null,

};

const AddressesCustomerSlice = createSlice({
	name: 'AddressesCustomer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllCustomerAddressesReducer(builder);
	},
});

// export const selectAllCustomer = (state: { allCustomer: allCustomerStatus }) => state.allCustomer;

export default AddressesCustomerSlice.reducer;
