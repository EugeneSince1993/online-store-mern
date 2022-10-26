import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IProduct } from '../../types/IProduct';
import { IObjWithAnyData, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { IProductParams } from '../../types/IProductParams';

export const fetchProducts = createAsyncThunk<IProduct[], SearchProductParams>(
  'product/fetchProducts',
  async (params) => {
    const { sortBy, order } = params;
    const { data } = await axios.get<IProduct[]>('products', {
      params: pickBy({
          sortBy,
          order,
        },
        identity
      ),
    });
    return data;
  }
);


export const fetchProductById = createAsyncThunk<IObjWithAnyData, any>(
  'product/fetchProductById',
  async (_id) => {
    const { data } = await axios.get<IObjWithAnyData>(`products/${_id}`);
    return data;
  }
);

export const createProduct = createAsyncThunk<IProduct, IProductParams>(
  'product/createProduct',
  async (paramsObj) => {
    const { data } = await axios.post<IProduct>('products', {...paramsObj});
    return data;
  }
);
