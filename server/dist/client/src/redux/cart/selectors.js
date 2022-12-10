"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCartItemById = exports.selectCart = void 0;
const selectCart = (state) => state.cart;
exports.selectCart = selectCart;
const selectCartItemById = (id) => (state) => {
    return state.cart.items.find((obj) => obj._id === id);
};
exports.selectCartItemById = selectCartItemById;
//# sourceMappingURL=selectors.js.map