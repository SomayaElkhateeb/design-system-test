import { createSlice } from '@reduxjs/toolkit'
import {
  addProductReducer,
  deleteProductReducer,
  fetchProductsReducer,
  updateProductReducer,
} from './productsExtraReducers'

// initialState
const initialState = {
  data: [],
  singleProduct: null,
  status: 'idle',
  error: null,
}

// more slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchProductsReducer(builder),
      addProductReducer(builder),
      updateProductReducer(builder),
      deleteProductReducer(builder)
  },
})

const productsData = (state) => state.products

export { productsData }

// export const {  } = productSlice.actions
export default productSlice.reducer
