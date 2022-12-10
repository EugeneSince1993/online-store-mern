"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearItems = exports.subtractItem = exports.removeItem = exports.addItem = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const calcTotalPrice_1 = require("../../utils/calcTotalPrice");
const getCartFromLS_1 = require("../../utils/getCartFromLS");
const initialState = (0, getCartFromLS_1.getCartFromLS)();
const cartSlice = (0, toolkit_1.createSlice)({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) => obj._id === action.payload._id);
            if (findItem) {
                findItem.count++;
            }
            else {
                state.items.push(Object.assign(Object.assign({}, action.payload), { count: 1 }));
            }
            state.totalPrice = (0, calcTotalPrice_1.calcTotalPrice)(state.items);
        },
        subtractItem(state, action) {
            const findItem = state.items.find((obj) => obj._id === action.payload);
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice = (0, calcTotalPrice_1.calcTotalPrice)(state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj._id !== action.payload);
            state.totalPrice = (0, calcTotalPrice_1.calcTotalPrice)(state.items);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
});
_a = cartSlice.actions, exports.addItem = _a.addItem, exports.removeItem = _a.removeItem, exports.subtractItem = _a.subtractItem, exports.clearItems = _a.clearItems;
exports.default = cartSlice.reducer;
//# sourceMappingURL=cartSlice.js.map