import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/pages/ProductsPage/_comp/data';

// Define the initial state type and value
interface AddOrderState {
    Add_Order_Data: {
        customer_id: string
        products: Product[]
        address_id: string
    }
}

const initialState: AddOrderState = {
    Add_Order_Data: {
        customer_id: '',
        products: [],
        address_id: ''
    },
};

// Create the slice
const AddOrderSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setAdd_Order_Data_Customer_id(state, action: PayloadAction<string>) {
            state.Add_Order_Data.customer_id = action.payload;
        },
        setAdd_Order_Data_Products(state, action: PayloadAction<Product[]>) {
            state.Add_Order_Data.products = action.payload;
        },
        setAdd_Order_Data_Address_id(state, action: PayloadAction<string>) {
            state.Add_Order_Data.address_id = action.payload;
        },
        clearData(state) {
            state.Add_Order_Data.customer_id = ""
            state.Add_Order_Data.products = []
            state.Add_Order_Data.address_id = ""

        }
    },
});

// Export actions and reducer
export const { setAdd_Order_Data_Customer_id, setAdd_Order_Data_Products, setAdd_Order_Data_Address_id,clearData } = AddOrderSlice.actions;
export default AddOrderSlice.reducer;