"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearFavoriteItems = exports.removeFavoriteItem = exports.addFavoriteItem = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const getFavoritesFromLS_1 = require("../../utils/getFavoritesFromLS");
const initialState = (0, getFavoritesFromLS_1.getFavoritesFromLS)();
const favoriteSlice = (0, toolkit_1.createSlice)({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoriteItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (!findItem) {
                state.items.push(Object.assign(Object.assign({}, action.payload), { count: 1 }));
            }
        },
        removeFavoriteItem(state, action) {
            state.items = state.items.filter((obj) => {
                return obj.id !== action.payload;
            });
        },
        clearFavoriteItems(state) {
            state.items = [];
        },
    }
});
_a = favoriteSlice.actions, exports.addFavoriteItem = _a.addFavoriteItem, exports.removeFavoriteItem = _a.removeFavoriteItem, exports.clearFavoriteItems = _a.clearFavoriteItems;
exports.default = favoriteSlice.reducer;
//# sourceMappingURL=favoriteSlice.js.map