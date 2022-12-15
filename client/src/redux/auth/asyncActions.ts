import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { ILoginParams, IRegisterParams, IResponse } from './types';

export const fetchAuth = createAsyncThunk<IResponse, ILoginParams>(
  'auth/fetchAuth', 
  async (params) => {
    const { data } = await axios.post<IResponse>('auth/login', params);
    return data;
});

export const fetchRegister = createAsyncThunk<IResponse, IRegisterParams>(
  'auth/fetchRegister', 
  async (params) => {
    const { data } = await axios.post<IResponse>('auth/register/', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk<IResponse>(
  'auth/fetchAuthMe', 
  async () => {
    const { data } = await axios.get<IResponse>('auth/me');
    return data;
});