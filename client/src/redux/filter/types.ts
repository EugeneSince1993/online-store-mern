export enum SortPropertyEnum {
  RATING_ASC = 'rating',
  RATING_DESC = '-rating',
  TITLE_ASC = 'name',
  TITLE_DESC = '-name',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price'
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
}

export interface ITypes {
  brands: IStringVal;
  memory: IStringVal;
  ram: IStringVal;
  cpuCores: IStringVal;
  priceRange: IRange;
  screenSizeRange: IRange;
  batteryCapacityRange: IRange;
  colors: IStringVal;
}

export interface IStringVal {
  [stringVal: string]: boolean;
}

export interface IRange {
  [extreme: string]: number;
}

export interface IRangeExtremes {
  priceExtremes: IRange;
  screenSizeExtremes: IRange;
  batteryCapacityExtremes: IRange;
}

export interface FilterSliceState {
  sort: Sort;
  types: ITypes;
  searchValue: string;
  currentPage: number;
  rangeExtremes: IRangeExtremes;
  isLoading: boolean;
  error: string;
}
