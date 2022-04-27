import { FilterState, ChangeFavFilter } from "../../types/filter";

const initialState: FilterState = {
  sortByFavorites: false,
};

const filters = (state = initialState, action: ChangeFavFilter) => {
  switch (action.type) {
    case "CHANGE_FAV_FILTER":
      return {
        ...state,
        sortByFavorites: !state.sortByFavorites,
      };

    default:
      return state;
  }
};

export default filters;
