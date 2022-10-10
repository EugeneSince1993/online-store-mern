"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentPage = exports.setSearchValue = exports.setColors = exports.setMaxBatteryCapacity = exports.setMinBatteryCapacity = exports.setMaxScreenSize = exports.setMinScreenSize = exports.setMaxPrice = exports.setMinPrice = exports.setCpuCores = exports.setRam = exports.setMemory = exports.setBrands = exports.setFilters = exports.setSort = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const types_1 = require("./types");
const initialState = {
    types: {
        brands: {
            "Apple": false,
            "Samsung": false,
            "Xiaomi": false,
            "Honor": false,
        },
        priceRange: {
            min: 0,
            max: 95000,
        },
        colors: {
            "white": false,
            "black": false,
            "gray": false,
            "blue": false,
            "red": false,
            "pink": false,
            "green": false,
            "yellow": false
        },
        screenSizeRange: {
            min: 4,
            max: 7,
        },
        memory: {
            "8": false,
            "16": false,
            "32": false,
            "64": false,
            "128": false,
            "256": false,
            "512": false,
        },
        ram: {
            "1": false,
            "2": false,
            "3": false,
            "4": false,
            "6": false,
            "8": false,
            "12": false,
        },
        cpuCores: {
            "2": false,
            "4": false,
            "6": false,
            "8": false,
        },
        batteryCapacityRange: {
            min: 1500,
            max: 7000,
        },
    },
    sort: {
        name: 'по популярности (по убыванию)',
        sortProperty: types_1.SortPropertyEnum.RATING_DESC,
    },
    searchValue: '',
    currentPage: 1,
};
const filterSlice = (0, toolkit_1.createSlice)({
    name: 'filters',
    initialState,
    reducers: {
        setBrands(state, action) {
            state.types.brands = action.payload;
        },
        setMemory(state, action) {
            state.types.memory = action.payload;
        },
        setRam(state, action) {
            state.types.ram = action.payload;
        },
        setCpuCores(state, action) {
            state.types.cpuCores = action.payload;
        },
        setMinPrice(state, action) {
            state.types.priceRange.min = action.payload;
        },
        setMaxPrice(state, action) {
            state.types.priceRange.max = action.payload;
        },
        setMinScreenSize(state, action) {
            state.types.screenSizeRange.min = action.payload;
        },
        setMaxScreenSize(state, action) {
            state.types.screenSizeRange.max = action.payload;
        },
        setMinBatteryCapacity(state, action) {
            state.types.batteryCapacityRange.min = action.payload;
        },
        setMaxBatteryCapacity(state, action) {
            state.types.batteryCapacityRange.max = action.payload;
        },
        setColors(state, action) {
            state.types.colors = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setFilters(state, action) {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.sort = action.payload.sort;
                state.types.brands = action.payload;
            }
            else {
                state.currentPage = 1;
                state.sort = {
                    name: 'популярности',
                    sortProperty: types_1.SortPropertyEnum.RATING_DESC,
                };
                state.types.brands = {
                    "Apple": false,
                    "Samsung": false,
                    "Xiaomi": false,
                };
            }
        },
    },
});
_a = filterSlice.actions, exports.setSort = _a.setSort, exports.setFilters = _a.setFilters, exports.setBrands = _a.setBrands, exports.setMemory = _a.setMemory, exports.setRam = _a.setRam, exports.setCpuCores = _a.setCpuCores, exports.setMinPrice = _a.setMinPrice, exports.setMaxPrice = _a.setMaxPrice, exports.setMinScreenSize = _a.setMinScreenSize, exports.setMaxScreenSize = _a.setMaxScreenSize, exports.setMinBatteryCapacity = _a.setMinBatteryCapacity, exports.setMaxBatteryCapacity = _a.setMaxBatteryCapacity, exports.setColors = _a.setColors, exports.setSearchValue = _a.setSearchValue, exports.setCurrentPage = _a.setCurrentPage;
exports.default = filterSlice.reducer;
//# sourceMappingURL=filterSlice.js.map