"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartFromLS = void 0;
const calcTotalPrice_1 = require("./calcTotalPrice");
const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = (0, calcTotalPrice_1.calcTotalPrice)(items);
    return {
        items: items,
        totalPrice,
    };
};
exports.getCartFromLS = getCartFromLS;
//# sourceMappingURL=getCartFromLS.js.map