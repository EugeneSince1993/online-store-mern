import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchAuthMe, fetchRegister } from "./asyncActions";

interface AuthState {
  data: any;
  status: string;
}

const authDataFromLS = window.localStorage.getItem('authData');

const initialState: AuthState = {
  data: authDataFromLS ? authDataFromLS : null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });

    builder.addCase(fetchAuth.fulfilled, (state, action: any) => {
      state.status = 'loaded';
      state.data = action.payload;
    });

    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });

    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });

    builder.addCase(fetchAuthMe.fulfilled, (state, action: any) => {
      state.status = 'loaded';
      state.data = action.payload;
    });

    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });

    builder.addCase(fetchRegister.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });

    builder.addCase(fetchRegister.fulfilled, (state, action: any) => {
      state.status = 'loaded';
      state.data = action.payload;
    });

    builder.addCase(fetchRegister.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
