import { IProduct } from './../../types/IProduct';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createProduct, fetchProductById, fetchProducts } from './asyncActions';
import { IObjWithAnyData } from './types';

interface ProductState {
  products: IProduct[],
  currentProduct: IObjWithAnyData,
  isLoading: boolean;
  error: string;
  successMsg: string;
}

const initialState: ProductState = {
  products: [],
  currentProduct: {},
  isLoading: false,
  error: '',
  successMsg: ''
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
    builder.addCase(fetchProducts.pending, (state) => {
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

    builder.addCase(fetchProductById.pending, (state) => {
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

    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createProduct.fulfilled, 
      (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.error = '';
      state.successMsg = `Добавлен товар: ${action.payload.name}`;
    });

    builder.addCase(createProduct.rejected, 
      (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
      state.successMsg = '';
    });
  }
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
