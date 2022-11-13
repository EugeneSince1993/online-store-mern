"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectFavoriteItemById = exports.selectFavorites = void 0;
const selectFavorites = (state) => state.favorites;
exports.selectFavorites = selectFavorites;
const selectFavoriteItemById = (id) => (state) => {
    return state.favorites.items.find((obj) => obj._id === id);
};
exports.selectFavoriteItemById = selectFavoriteItemById;
//# sourceMappingURL=selectors.js.map