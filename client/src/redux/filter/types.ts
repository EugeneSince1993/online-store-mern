export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'name',
  TITLE_ASC = '-name',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
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
  min: number;
  max: number;
}

export interface FilterSliceState {
  sort: Sort;
  types: ITypes;
  searchValue: string;
  currentPage: number;
}
