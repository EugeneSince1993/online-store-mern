import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { 
  FilterSliceState, 
  Sort, 
  SortPropertyEnum,  
  IStringVal } from './types';

const initialState: FilterSliceState = {
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
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  searchValue: '',
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrands(state, action: PayloadAction<IStringVal>) {
      state.types.brands = action.payload;
    },
    setMemory(state, action: PayloadAction<IStringVal>) {
      state.types.memory = action.payload;
    },
    setRam(state, action: PayloadAction<IStringVal>) {
      state.types.ram = action.payload;
    },
    setCpuCores(state, action: PayloadAction<IStringVal>) {
      state.types.cpuCores = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.types.priceRange.min = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.types.priceRange.max = action.payload;
    },
    setMinScreenSize(state, action: PayloadAction<number>) {
      state.types.screenSizeRange.min = action.payload;
    },
    setMaxScreenSize(state, action: PayloadAction<number>) {
      state.types.screenSizeRange.max = action.payload;
    },
    setMinBatteryCapacity(state, action: PayloadAction<number>) {
      state.types.batteryCapacityRange.min = action.payload;
    },
    setMaxBatteryCapacity(state, action: PayloadAction<number>) {
      state.types.batteryCapacityRange.max = action.payload;
    },
    setColors(state, action: PayloadAction<IStringVal>) {
      state.types.colors = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<any>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.sort = action.payload.sort;
        state.types.brands = action.payload;
      } else {
        state.currentPage = 1;
        state.sort = {
          name: 'популярности',
          sortProperty: SortPropertyEnum.RATING_DESC,
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

export const {
  setSort, 
  setFilters, 
  setBrands, 
  setMemory, 
  setRam,
  setCpuCores,
  setMinPrice,
  setMaxPrice,
  setMinScreenSize,
  setMaxScreenSize,
  setMinBatteryCapacity,
  setMaxBatteryCapacity,
  setColors,
  setSearchValue,
  setCurrentPage
} = filterSlice.actions;

export default filterSlice.reducer;
