"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavoritesFromLS = void 0;
const getFavoritesFromLS = () => {
    const data = localStorage.getItem('favorites');
    const items = data ? JSON.parse(data) : [];
    return {
        items: items,
    };
};
exports.getFavoritesFromLS = getFavoritesFromLS;
//# sourceMappingURL=getFavoritesFromLS.js.map