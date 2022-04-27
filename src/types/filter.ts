export interface FilterState {
  sortByFavorites: boolean;
}

export const CHANGE_FAV_FILTER = "CHANGE_FAV_FILTER";

export interface ChangeFavFilter {
  type: typeof CHANGE_FAV_FILTER;
}
