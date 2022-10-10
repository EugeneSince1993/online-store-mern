"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const productSlice_1 = __importDefault(require("./product/productSlice"));
const filterSlice_1 = __importDefault(require("./filter/filterSlice"));
const cartSlice_1 = __importDefault(require("./cart/cartSlice"));
const favoriteSlice_1 = __importDefault(require("./favorites/favoriteSlice"));
const query_1 = require("@reduxjs/toolkit/query");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        product: productSlice_1.default,
        filter: filterSlice_1.default,
        cart: cartSlice_1.default,
        favorites: favoriteSlice_1.default,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
(0, query_1.setupListeners)(exports.store.dispatch);
exports.useAppDispatch = react_redux_1.useDispatch;
//# sourceMappingURL=store.js.map