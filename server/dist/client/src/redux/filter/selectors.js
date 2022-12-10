"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSort = exports.selectFilter = void 0;
const selectFilter = (state) => state.filter;
exports.selectFilter = selectFilter;
const selectSort = (state) => state.filter.sort;
exports.selectSort = selectSort;
//# sourceMappingURL=selectors.js.map