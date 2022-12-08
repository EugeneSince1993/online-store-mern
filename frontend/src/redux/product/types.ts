export type SearchProductParams = {
  sortBy: string;
  order: string;
};

export interface IObjWithAnyData {
  [key: string]: any;
}