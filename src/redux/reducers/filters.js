const initialState = {
  sortByFavorites: false,
};

const filters = (state = initialState, action) => {
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
