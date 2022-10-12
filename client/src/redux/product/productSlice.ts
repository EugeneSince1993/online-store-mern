import { IProduct } from './../../types/IProduct';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchProductById, fetchProducts } from './asyncActions';
import { IObjWithAnyData } from './types';

interface ProductState {
  products: IProduct[],
  currentProduct: IObjWithAnyData,
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  currentProduct: {},
  isLoading: false,
  error: '',
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, 
      (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, 
      (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
      state.products = [];
    });

    builder.addCase(fetchProductById.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProductById.fulfilled, 
      (state, action: PayloadAction<IObjWithAnyData>) => {
      state.isLoading = false;
      state.error = '';
      state.currentProduct = action.payload;
    });

    builder.addCase(fetchProductById.rejected, 
      (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
      state.currentProduct = {};
    });
  }
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
