import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from '../../types/IProduct';
import { SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<IProduct[], SearchProductParams>(
  'product/fetchProducts',
  async (params) => {
    const { sortBy, order } = params;
    const { data } = await axios.get<IProduct[]>('https://62d96f595d893b27b2e676e7.mockapi.io/products', {
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
