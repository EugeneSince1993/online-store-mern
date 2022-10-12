"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setItems = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const asyncActions_1 = require("./asyncActions");
const initialState = {
    products: [],
    currentProduct: {},
    isLoading: false,
    error: '',
};
const productSlice = (0, toolkit_1.createSlice)({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncActions_1.fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(asyncActions_1.fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        });
        builder.addCase(asyncActions_1.fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.products = [];
        });
        builder.addCase(asyncActions_1.fetchProductById.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(asyncActions_1.fetchProductById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.currentProduct = action.payload;
        });
        builder.addCase(asyncActions_1.fetchProductById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.currentProduct = {};
        });
    }
});
exports.setItems = productSlice.actions.setItems;
exports.default = productSlice.reducer;
//# sourceMappingURL=productSlice.js.map