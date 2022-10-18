import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IRangeExtremes } from './types';

export const getRangeExtremes = createAsyncThunk(
  'product/getRangeExtremes',
  async () => {
    let { data } = await axios.get<IRangeExtremes>('get-range-extremes');
    return data;
  }
);

