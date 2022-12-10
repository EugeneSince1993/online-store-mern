"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const asyncActions_1 = require("./asyncActions");
const authDataFromLS = window.localStorage.getItem('authData');
const initialState = {
    data: authDataFromLS ? authDataFromLS : null,
    status: 'loading',
};
const authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncActions_1.fetchAuth.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        });
        builder.addCase(asyncActions_1.fetchAuth.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        });
        builder.addCase(asyncActions_1.fetchAuth.rejected, (state) => {
            state.status = 'error';
            state.data = null;
        });
        builder.addCase(asyncActions_1.fetchAuthMe.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        });
        builder.addCase(asyncActions_1.fetchAuthMe.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        });
        builder.addCase(asyncActions_1.fetchAuthMe.rejected, (state) => {
            state.status = 'error';
            state.data = null;
        });
        builder.addCase(asyncActions_1.fetchRegister.pending, (state) => {
            state.status = 'loading';
            state.data = null;
        });
        builder.addCase(asyncActions_1.fetchRegister.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        });
        builder.addCase(asyncActions_1.fetchRegister.rejected, (state) => {
            state.status = 'error';
            state.data = null;
        });
    }
});
exports.logout = authSlice.actions.logout;
exports.default = authSlice.reducer;
//# sourceMappingURL=authSlice.js.map