"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrice = void 0;
const calcTotalPrice = (items) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
exports.calcTotalPrice = calcTotalPrice;
//# sourceMappingURL=calcTotalPrice.js.map